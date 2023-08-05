let fullName = prompt("Lütfen adınızı giriniz:", "Yalnızca text giriniz")

let title = document.querySelector("#title")
title.innerHTML = `${title.innerHTML} <small style="color:red">${fullName}</small>`