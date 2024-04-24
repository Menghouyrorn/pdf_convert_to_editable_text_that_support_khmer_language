import React from "react";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";
import Tesseract from "tesseract.js";
var pdfjsLib = window["pdfjs-dist/build/pdf"];
pdfjsLib.GlobalWorkerOptions.workerSrc = "/assets/js/pdf.worker.js";

const ConvertPDFTOWORD = () => {
  const [pdffile, setPdfFile] = React.useState(null);
  const [pdfname, setPdfName] = React.useState("");
  const [text, setText] = React.useState("");
  const handleSelectFiled = (e) => {
    setPdfFile(e.target.files[0]);
    UrlUploader(e.target.files[0]);
    setPdfName(e.target.files[0].name);
    console.log(e.target.files[0].name);
  };

  const UrlUploader = (file) => {
    let pdfurl = URL.createObjectURL(file);
    fetch(pdfurl).then((response) => {
      response.blob().then((blob) => {
        let reader = new FileReader();
        reader.onload = (e) => {
          const data = atob(e.target.result.replace(/.*base64,/, ""));
          renderPage(data);
        };
        reader.readAsDataURL(blob);
      });
    });
  };

  const renderPage = async (data) => {
    const imageList = [];
    const canvas = document.createElement("canvas");
    canvas.setAttribute("className", "canv");
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    for (let i = 1; i <= pdf.numPages; i++) {
      var page = await pdf.getPage(i);
      var viewport = page.getViewport({ scale: 1.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      var render_context = {
        canvasContext: canvas.getContext("2d"),
        viewport: viewport,
      };
      await page.render(render_context).promise;
      let img = canvas.toDataURL("image/png");
      imageList.push(img);
    }
    convertPDFTOTEXT(imageList);
  };

  const convertPDFTOTEXT = async (file) => {
    const texts = [];
    for (const images of file) {
      const { data } = await Tesseract.recognize(images, "eng+khm", {
        logger: (m) => console.log(m),
      });
      texts.push(data.text);
    }

    texts.join("\n");

    setText(texts);
  };

  const downloadTextTOWord = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: text.toString(),
              keepLines: true,
              fontFamily: "Khmer OS Battambang",
            }),
          ],
        },
      ],
    });
    let name = pdfname.slice(0, -4);
    Packer.toBlob(doc).then((data) => {
      saveAs(data, `${name}.doc`);
    });
  };

  const sizeFile = (file) => {
    const fileSizeInBytes = file.size; // Example file size in bytes
    let fileSize;

    if (fileSizeInBytes >= 1048576) {
      fileSize = (fileSizeInBytes / 1048576).toFixed(2) + " MB";
    } else {
      fileSize = (fileSizeInBytes / 1024).toFixed(2) + " KB";
    }
    return fileSize;
  };

  return (
    <div className="p-[10px]">
      <div>
        <h1 className="font-bold text-[#1B1464] text-3xl m-auto text-center mt-[30px] w-[700px]">
          Convert to Word
        </h1>
        <div className="w-[50%] m-auto">
          <p className="text-center text-lg mt-[10px]">
            Text recognition without software installation or download. This OCR
            converter allows you to convert to the Microsoft Word formats DOC
            and DOCX.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full m-auto">
        <div className="relative -right-[50px] z-10 -top-[60px]">
          <img src="/image/1.png" alt="" />
        </div>
        {pdffile ? (
          <div>
            {text.length > 0 ? (
              <div className="w-[700px] bg-white shadow-md border border-spacing-1 h-[300px] z-40 mt-[60px] rounded-xl flex flex-col justify-center items-center">
                <img src="/image/pdf.png" alt="" className="w-[60px] mb-2" />
                <div className="flex flex-col items-center gap-y-3">
                  <div className="flex flex-col">
                    <h1 className="text-lg">{pdfname.slice(0, -4)}.doc</h1>
                    <p className="text-sm">{sizeFile(pdffile)}</p>
                  </div>
                  <button
                    className="w-[150px] h-[40px] flex justify-center items-center text-white text-base cursor-pointer font-bold rounded-md bg-[#1B1464] hover:shadow-md transition-all"
                    onClick={downloadTextTOWord}
                  >
                    Download
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-[700px] bg-white shadow-md border border-spacing-1 h-[300px] z-40 mt-[60px] rounded-xl flex flex-col justify-center items-center">
                <div className="flex items-center w-[70%] h-[80px] rounded-md justify-between p-5 bg-[#f4f9ff] shadow-md">
                  <img src="/image/pdf.png" alt="" className="w-[50px] mb-2" />
                  <h1>{pdfname}.pdf</h1>
                  <div className="flex items-center gap-x-8">
                    <p>1 MB</p>
                    <button
                      className="bg-[#1B1464] w-[50px] h-[40px] text-white text-lg font-extrabold rounded-md"
                      onClick={() => window.location.reload()}
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-y-3 mt-[20px]">
                  <p
                    htmlFor="contained-button-file"
                    className="w-[250px] h-[40px] flex justify-center items-center text-white text-base font-bold rounded-md bg-[#1B1464] hover:shadow-md transition-all"
                  >
                    Converter is Process...
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-[700px] bg-white shadow-md border border-spacing-1 h-[300px] z-40 mt-[60px] rounded-xl flex flex-col justify-center items-center">
            <img src="/image/upload.png" alt="" className="w-[60px] mb-2" />
            <div className="flex flex-col items-center gap-y-3">
              <h1 className="text-2xl text-black font-semibold">
                Drag and Drop document here to upload
              </h1>
              <input
                type="file"
                className="hidden"
                accept=".pdf"
                id="contained-button-file"
                onChange={handleSelectFiled}
              />
              <label
                htmlFor="contained-button-file"
                className="w-[150px] h-[40px] flex justify-center items-center text-white text-base cursor-pointer font-bold rounded-md bg-[#1B1464] hover:shadow-md transition-all"
              >
                Select
              </label>
            </div>
          </div>
        )}
        <div className="relative -left-[100px] z-20">
          <img src="/image/2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ConvertPDFTOWORD;
