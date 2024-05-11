// Inicializace počátečních hodnot
let a = 1;
let b = 1;
let suma = 0;

// Dokud hodnota nepřesáhne 4 miliony
while (a <= 4000000) {
    // Pokud je hodnota sudá, přičti ji k sumě
    if (a % 2 === 0) {
        suma += a;
    }
    
    // Výpočet dalšího členu Fibonacciho posloupnosti
    [a, b] = [b, a + b];
}

console.log("Součet sudých hodnot v Fibonacciho posloupnosti do 4 milionů je:", suma);
