import { imageUploader } from "./imageUploader.js";
const uploadIcon = document.querySelector(".icon i");
const inputFile = document.querySelector("input");

uploadIcon.addEventListener("click", function () {
  this.nextElementSibling.click();
});

inputFile.addEventListener("change", function (e) {
  const { files } = e.target;

  imageUploader(files);
});



/* slider and popup*/
let changableAttr;

document.querySelectorAll(".all-images a").forEach(image => {
    image.addEventListener("click",function(e){
        e.preventDefault();
    })
})


document.querySelectorAll(".all-images").forEach(image => {
    image.addEventListener("click",function(e){
        changableAttr=this.children[0].getAttribute("src");
        changeImgSrcAttr(changableAttr);
        document.querySelector(".pop-container").style.display="flex";
    })
})

document.querySelector(".fa-arrow-right").addEventListener("click",function(){
    nextSlide();
})

document.querySelector(".fa-arrow-left").addEventListener("click",function(){
    prevSlide();
})

function nextSlide()
{
    if(document.querySelector(`[src="${changableAttr}"]`).parentElement.nextElementSibling)
        changableAttr=document.querySelector(`[src="${changableAttr}"]`).parentElement.nextElementSibling.children[0].getAttribute("src");                 
    else
        changableAttr=document.querySelector(".all-images").children[0].children[0].getAttribute("src");
    changeImgSrcAttr(changableAttr);
}

function prevSlide()
{
    if(document.querySelector(`[src="${changableAttr}"]`).parentElement.previousElementSibling)
        changableAttr=document.querySelector(`[src="${changableAttr}"]`).parentElement.previousElementSibling.children[0].getAttribute("src");                 
    else
        changableAttr=document.querySelector(".all-images").lastElementChild.children[0].getAttribute("src");
    changeImgSrcAttr(changableAttr);
}

function changeImgSrcAttr(src)
{
  document.querySelector(".pop-container .popup .biggest").setAttribute("src",src);
}

// under this line all for closing popup 
document.addEventListener("click", function(e){

    if(e.target.classList.contains("pop-container"))
        closePopup();
})

addEventListener('keydown', (e) => {
    if (e.key === "Escape")
        closePopup();
    else if (e.key === "ArrowRight")
        nextSlide();
    else if(e.key === "ArrowLeft")
        prevSlide();
});

document.querySelector(".fa-xmark").addEventListener("click",closePopup);

function closePopup()
{
  document.querySelector(".pop-container").style.display="none";
}