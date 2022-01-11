// mencari bilangan keren
//bilangan keren adalah bilangan yang faktornya bilangan itu sendiri dan 1 dan ada 2 bilangan bulat positif


// deklarasikan variabel
let inputNilai = 52;
let jumlahFaktor = 0;
let i = 1;

//buat kondisi untuk mencari faktor
for (i = 1; i<= inputNilai; i++) {
    if (inputNilai%i == 0) {
        jumlahFaktor++;
    }
}

// cek jumlah jumlahFaktor
console.log(jumlahFaktor);



//kondisikan, jika jumlah faktor maksimal berjumlah 4 maka akan dicetak "bilangan keren", berlaku untuk sebaliknya


if (jumlahFaktor <= 4) {

   console.log(inputNilai + " adalah bilangan keren");
}
else
{
    console.log(inputNilai + " bukan bilangan keren")
}

