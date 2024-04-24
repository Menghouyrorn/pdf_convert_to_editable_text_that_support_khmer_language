import React from "react";
import Tesseract from "tesseract.js";
var pdfjsLib = window["pdfjs-dist/build/pdf"];
pdfjsLib.GlobalWorkerOptions.workerSrc = "/assets/js/pdf.worker.js";

const ConvertPDFTOTXT = () => {
  const [pdfname, setPdfName] = React.useState("");
  const [text, setText] = React.useState("");
  const handleSelectFiled = (e) => {
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

  const downloadTextToFileTXT = () => {
    let name = pdfname.slice(0, -4);
    const texts = text;
    const element = document.createElement("a");
    const file = new Blob([texts], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${name}.txt`;
    document.body.appendChild(element);
    element.click();
  };
  return (
    <div className="p-[10px]">
      <div>
        <h1 className="font-bold text-[#1B1464] text-3xl m-auto text-center mt-[30px] w-[700px]">
          Convert to Text
        </h1>
        <div className="w-[50%] m-auto">
          <p className="text-center text-lg mt-[10px]">
            Text recognition without software installation or download. This OCR
            converter allows you to convert from pdf to the Text formats (.txt).
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full m-auto">
        <div className="relative -right-[50px] z-10 -top-[60px]">
          <img src="/image/1.png" alt="" />
        </div>
        <div className="w-[700px] bg-white shadow-md border border-spacing-1 h-[300px] z-40 mt-[60px] rounded-xl flex flex-col justify-center items-center">
          <img src="/image/txt.png" alt="" className="w-[50px] mb-2" />
          {text.length > 0 ? (
            <div className="flex flex-col items-center gap-y-3">
              <button className="w-[150px] h-[40px] flex justify-center items-center text-white text-base cursor-pointer font-bold rounded-md bg-[#1B1464] hover:shadow-md transition-all" onClick={downloadTextToFileTXT}>
                Download
              </button>
            </div>
          ) : (
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
          )}
        </div>
        <div className="relative -left-[100px] z-20">
          <img src="/image/2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ConvertPDFTOTXT;
