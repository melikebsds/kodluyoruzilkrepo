var isim = "Melike"
console.log(isim.length)

var tamIsim = "Melike Basdas"
console.log(tamIsim.indexOf("as"))//index numarasını verir
console.log(tamIsim.lastIndexOf('a'))//en sondan eşleşen indexin en baştan sayılmasıyla gelen sayıyı verir
console.log(tamIsim.search("Ba"))//index numarasını verir
console.log(tamIsim.slice(7, 11))//7 ve 11. indexler arasındaki metni verir
console.log(tamIsim.slice(7))//7 den sonraki metni verir
console.log(tamIsim.replace('Basdas', 'melike'))//metinde yer isim değiştirir
console.log(tamIsim.toUpperCase())
console.log(tamIsim.toLowerCase())

var soyisim = "Basdas"
console.log(isim.concat(' ', soyisim))

console.log(tamIsim.charAt(7))//7 deki harfi verir
console.log(tamIsim.charCodeAt(7))//7 deki harfin unicode'unu verir

var isimler = 'Melike, Baran'
var ayrikIsimler = isimler.split(',')
console.log(ayrikIsimler)

let email = "kodluyoruz@kodluyoruz.org"
let firstName = "JavaScript"
let lastName = "BOOTCAMP"
console.log(firstName[0]) //"J"

firstName = firstName.toUpperCase();
console.log(firstName); //"JAVASCRIPT"

lastName = lastName.toLowerCase();
console.log(lastName); //"bootcamp"

lastName = `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}` //Bootcamp ilk harf büyük

let domain = email.slice(email.search("@")+1); //mailde @'den sonrasını almamızı sağlar
console.log(domain); //"kodluyoruz.org"
let domain2 = email.slice(email.indexOf("@")+1); 
console.log(domain2); //"kodluyoruz.org"

console.log(email.includes("@")) //true
console.log(email.includes("$")) //false

email.startsWith("@"); //false - email @ işaretiyle mi başladı
email.endsWith("org"); //true


