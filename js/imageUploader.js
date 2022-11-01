const images = document.querySelector(".all-images");

export function imageUploader(files) {
  const imageList = [];
  for (let file of files) {
    const fileReader = new FileReader();

    fileReader.onloadend = (e) => {
      const { result } = e.target;
    
      const img = document.createElement("img");
      img.setAttribute("src", result);
      const aTag=document.createElement("a");
      aTag.setAttribute("href","#");

      imageList.push({ fileName: file.name, result });

      localStorage.setItem("imageSlides", JSON.stringify(imageList));
      aTag.appendChild(img);
      images.append(aTag);
    };

    fileReader.readAsDataURL(file);
  }
}