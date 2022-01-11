// lampu tombol
// ada beberapa tombol yang bernilai 1-N, dan apabila ditekan, keadaan lampu akan berubah, semisal dari kondisi mati akan menyala dan berlaku sebaliknya


// deklarasikan variabel, untuk lampu hidup dia bernilai true kalau mati dia bernilai false

let inputNilai = 6;
let jumlahFaktor = 0;
let i = 1;

//buat kondisi untuk mencari faktor, karena jumlah tombol yang ditekan berdasarkan jumlah faktor yang dimiliki

for (i = 1; i<= inputNilai; i++) {
    if (inputNilai%i == 0) {
        jumlahFaktor++;
    }
}

//kondisi lampu awal adalah mati, dan lampu akan menyala ketika ditekan satu kali, 3 kali, dst. berarti bisa diasumsikan kalau lampu akan menyala jika jumlah faktor bernilai ganjil, berlaku sebaliknya


if (jumlahFaktor%2 == 1) {

   console.log("lampu menyala");
}
else
{
    console.log("lampu mati");
}
