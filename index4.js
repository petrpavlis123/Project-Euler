function jePalindrom(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

let nejvetsiPalindrom = 0;

for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
        let soucin = i * j;
        if (jePalindrom(soucin) && soucin > nejvetsiPalindrom) {
            nejvetsiPalindrom = soucin;
        }
    }
}

console.log("Největší palindrom vytvořený součinem dvou trojciferných čísel je:", nejvetsiPalindrom);

