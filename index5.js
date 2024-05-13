// Funkce pro výpočet nejmenšího společného násobku čísel od 1 do 20
function smallestMultiple() {
    // Funkce pro výpočet prvočíselné faktorizace
    function primeFactors(n) {
        let factors = {};
        for (let i = 2; i <= n; i++) {
            while ((n % i) === 0) {
                factors[i] = (factors[i] || 0) + 1;
                n /= i;
            }
        }
        return factors;
    }

    // Vytvoření objektu pro uchování maximálních mocnin prvočísel
    let maxPrimeFactors = {};

    // Procházení čísel od 1 do 20 a hledání maximálních mocnin prvočísel
    for (let i = 2; i <= 20; i++) {
        let factors = primeFactors(i);
        for (let factor in factors) {
            if (!maxPrimeFactors[factor] || factors[factor] > maxPrimeFactors[factor]) {
                maxPrimeFactors[factor] = factors[factor];
            }
        }
    }

    // Výpočet NSN
    let result = 1;
    for (let factor in maxPrimeFactors) {
        result *= Math.pow(parseInt(factor), maxPrimeFactors[factor]);
    }

    return result;
}

// Volání funkce pro výpočet nejmenšího společného násobku
let smallestMultipleResult = smallestMultiple();
console.log("Nejmenší společný násobek čísel od 1 do 20 je: " + smallestMultipleResult);


