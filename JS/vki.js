var weight = prompt("Kilonuzu giriniz");
var height = prompt("boyunuzu metre cinsinden giriniz ör:1.66");

function vkiHesapla(weight, height) {
    var vki = weight/(height * height); 
  if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
  if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
  if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
  if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
  return alert("Girdiğiniz değerleri kontrol ediniz");
  };
  vkiHesapla(weight, height);