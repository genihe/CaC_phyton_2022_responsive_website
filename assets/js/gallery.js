const fullImgBox=document.getElementById("full-img-box"),
fullImg = document.getElementById("full-img");

function openFullImg(src_img){
    fullImgBox.style.display="flex";
    fullImg.src=src_img
}

function closeImg(){
    fullImgBox.style.display="none";
}
