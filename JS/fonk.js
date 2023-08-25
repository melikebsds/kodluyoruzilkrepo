let firstName = "Lorem"

function greetings(firstName="", lastName="") {
    // console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
}

console.log(firstName)
greetings()
greetings("Parametre")

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
// let info = "deneme" ????
console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color RED</span>`

domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("Lorem", "Ipsum"))