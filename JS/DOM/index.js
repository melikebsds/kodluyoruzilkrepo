document.getElementById("btnClick").addEventListener("click", openNewPage);
function openNewPage() {
    window.open("newpage.html", "_blank");
}


document.getElementById("btnClickP").addEventListener("click", changeText);
function changeText() {
    document.getElementById("domain").innerHTML = "DOM Manipülasyonu yaptık!";
}


document.getElementById("btnClickA").addEventListener("click", clicked);
function clicked(){
       alert("Butona Tıklandı");
} 



let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi"
console.log(title.innerHTML)

//let link = document.querySelector('ul#list>li>a') olabilir ya da:
let link = document.querySelector("#kodluyoruzLink")
//link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add('btn')
link.classList.add('newClass')