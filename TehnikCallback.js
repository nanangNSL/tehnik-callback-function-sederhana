// DEKLARASIKAN TERLEBIH DAHULU TEHNIK NYA YANG AKAN DIJADIKAN NANTI SEBAGAI METHOD UNTUK CALLBACK
const tambah =(a, b) => {
    let name ="Penjumlahan";
    let hasil = a +b;
    return name +" " +hasil;
};
const kurang =(a, b) =>{
    let name ="pengurangan";
    let hasil = a - b;
    return name +" " +hasil;};
const kali =(a, b) =>{
    let name ="perkalian";
    let hasil = a * b;
    return name +" " +hasil;
};
const bagi =(a, b) =>{
    let name ="pembagian";
    let hasil = a / b;
    return name +" " +hasil;
};
const sisa =(a, b) =>{
    let name ="sisanya";
    let hasil = a % b;
    return name +" " +hasil;
};

// MENCETAK DAN MEMANGGIL TEHNIK YANG AKAN DIGUNAKAN UNTUK MENGHITUNG VALUE NYA
const callback = (a, b, tehnikhasil) => {
    return `nilai ${a} dan ${b} = ${tehnikhasil(a,b)}`;
};
console.log(callback(26, 5, tambah)); //MEMANGGIL TEHNIK TAMBAH
console.log(callback(26, 5, kurang)) ;//MEMANGGIL TEHNIK KURANG
console.log(callback(26, 5, kali)); //MEMANGGIL TEHNIK KALI
console.log(callback(26, 5, bagi)); //MEMANGGIL TEHNIK BAGI
console.log(callback(26, 5, sisa)); //MEMANGGIL TEHNIK SISA

/* TEHNIK CALLBACK FUNCTION DENGAN ARROW FUNCTION SEDERHANA*/ 