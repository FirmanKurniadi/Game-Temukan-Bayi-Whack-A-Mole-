const kerdus = document.querySelectorAll('.kerdus');
const bayi = document.querySelectorAll('.bayi');
const papanSkor = document.querySelector('.papan-skor')

let kerdusSebelumnya;  

function randomKerdus(kerdus) {
    const k = Math.floor(Math.random() * kerdus.length);
    const kRandom = kerdus[k];
    if (kRandom == kerdusSebelumnya) {
        randomKerdus(kerdus);
    }
    kerdusSebelumnya = kRandom;
    return kRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanBayi() {
    const kRandom = randomKerdus(kerdus);
    const wRandom = randomWaktu(300, 1000)
    kRandom.classList.add('muncul');

    setTimeout(() => {
        kRandom.classList.remove('muncul');
            munculkanBayi();    
    }, wRandom);
}

function mulai() {
    munculkanBayi();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul() {
    skor++;
    papanSkor.textContent = skor;
}