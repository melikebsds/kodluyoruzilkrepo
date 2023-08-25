let products;

try {
    products.forEach(item => console.log(item));
} catch (error) {
    console.log("error:", error)
}

console.log("hata yonetimi duzgun calisiyor")

let info = "kodluyoruz"
console.log(info)

try {
    //Çalıştırılacak kodlar
  }catch(hata) {
    //Hata yakalandığında çalışacak kodlar
  }finally {
    //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
  }