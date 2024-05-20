import React from "react";
import Tesseract from "tesseract.js";
var pdfjsLib = window["pdfjs-dist/build/pdf"];
pdfjsLib.GlobalWorkerOptions.workerSrc = "/assets/js/pdf.worker.js";

const ConvertPDFTOTXT = () => {
  const [pdffile, setPdfFile] = React.useState(null);
  const [pdfname, setPdfName] = React.useState("");
  const [text, setText] = React.useState("");
  const [progress, setProgress] = React.useState(0);
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
    let processedImages = 0;
    let imageLength = file.length;
    for (const images of file) {
      const { data } = await Tesseract.recognize(images, "eng+khm", {
        logger: (m) => {
          console.log(m);
          // if(m.status ==="recognizing text"){
          //   setProgress(parseInt(m.progress * 100))
          // }
        },
        // logger: (m) => console.log(m),
      });
      processedImages++;
      const progressPercentage = (processedImages / imageLength) * 100;
      setProgress(progressPercentage);
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
    <div className="p-[10px] h-screen top-0">
      <div>
        <h1 className="font-bold text-[#1B1464] text-3xl m-auto text-center mt-[30px] w-full md:w-[700px]">
          Convert to Text
        </h1>
        <div className="w-full md:w-[50%] m-auto">
          <p className="text-center text-lg mt-[10px]">
            Text recognition without software installation or download. This
            converter allows you to convert from pdf to the Text formats (.txt).
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full m-auto">
        <div className="relative -right-[50px] z-10 -top-[60px] hidden md:flex">
          <img src="/image/1.png" alt="" />
        </div>
        {pdffile ? (
          <>
            {text.length > 0 ? (
              <div className="w-full md:w-[700px] bg-white shadow-md border border-spacing-1 h-[200px] md:h-[300px] z-40 mt-[60px] rounded-xl flex flex-col justify-center items-center">
                <img
                  src="/image/txt1.png"
                  alt=""
                  className="w-[65px] md:w-[85px] mb-2"
                />
                <div className="flex flex-col items-center gap-y-3">
                  <div className="flex flex-col">
                    <h1 className="text-sm md:text-lg">
                      {pdfname.slice(0, -4)}.txt
                    </h1>
                    <p className="text-xs md:text-sm">{sizeFile(pdffile)}</p>
                  </div>
                  <button
                    className="w-[150px] h-[40px] flex mb-4 md:mb-0 justify-center items-center text-white text-base cursor-pointer font-bold rounded-md bg-[#1B1464] hover:shadow-md transition-all"
                    onClick={downloadTextToFileTXT}
                  >
                    Download
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full md:w-[700px] bg-white shadow-md border border-spacing-1 h-[200px] md:h-[300px] z-40 mt-[60px] rounded-xl flex flex-col justify-center items-center">
                <div className="flex items-center w-full md:w-[70%] h-[80px] rounded-md justify-between p-5 bg-[#f4f9ff] shadow-md">
                  <img src="/image/pdf.png" alt="" className="w-[50px] mb-2" />
                  <h1 className="text-xs md:text-base">
                    {pdfname.slice(0, -4)}.pdf
                  </h1>
                  <div className="flex items-center gap-x-3 md:gap-x-8">
                    <p className="text-xs md:text-base">{sizeFile(pdffile)}</p>
                    <button
                      className="bg-[#1B1464] w-[36px] md:w-[50px] h-[33px] md:h-[40px] text-white text-base md:text-lg font-extrabold rounded-md"
                      onClick={() => window.location.reload()}
                    >
                      X
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-y-3 mt-[20px]">
                  <p
                    htmlFor="contained-button-file"
                    className="w-[200px] md:w-[280px] h-[40px] flex justify-center items-center text-white text-xs md:text-base font-bold rounded-md bg-[#1B1464] hover:shadow-md transition-all"
                  >
                    Converter is Process...{" "}
                    <span className="text-green-600 ml-3">
                      {progress.toString().slice(0, 3)} %
                    </span>
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full md:w-[700px] bg-white shadow-md border border-spacing-1 h-[200px] md:h-[300px] z-40 mt-[60px] rounded-xl flex flex-col justify-center items-center">
            <img src="/image/upload.png" alt="" className="w-[60px] mb-2" />
            <div className="flex flex-col items-center gap-y-3">
              <h1 className="text-base md:text-2xl text-black font-semibold">
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
        <div className="relative -left-[100px] z-20 hidden md:flex">
          <img src="/image/2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ConvertPDFTOTXT;
