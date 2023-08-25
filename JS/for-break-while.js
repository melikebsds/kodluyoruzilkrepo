//For Dongusu
let users = ["Lorem","Ipsum","Dolor"]

/* for(let index = 0; index < 10; indexx++) {
    console.log(index)
} */

/* let index = 0
for(; index < 10; index ++) {
    console.log(index)
} */

const userListDOM = document.querySelector('#userList')

for(index = 0; index < users.length; indexx++) {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}




//break
const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'merhaba', 'selam', 'elit'
]

let counter = 0
/*for(; counter < 10; counter++) {
    console.log(counter)
    if(counter === 5) {break}
}*/

for(; counter < 10; counter++) {
    if(counter === 5) {continue}
    console.log(counter)//5 hariç hepsini yazar
}




//While Dongusu
/*let counterW = 0;
while ( counterW < 10 ) {
    console.log(counterW)
    counterW++
}*/

let userName = "";
while (!userName) {
    userName = prompt("Kullanici Adini Giriniz: ")
    console.log(userName)
}