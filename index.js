function sumMultiplesOf3And5(limit) {
    // Funkce pro výpočet součtu aritmetické řady
    function sumArithmeticSeries(firstTerm, lastTerm, numTerms) {
        return numTerms / 2 * (firstTerm + lastTerm);
    }

    // Najdeme součet všech násobků čísla 3
    let numMultiplesOf3 = Math.floor((limit - 1) / 3);
    let sumMultiplesOf3 = sumArithmeticSeries(3, 3 * numMultiplesOf3, numMultiplesOf3);

    // Najdeme součet všech násobků čísla 5
    let numMultiplesOf5 = Math.floor((limit - 1) / 5);
    let sumMultiplesOf5 = sumArithmeticSeries(5, 5 * numMultiplesOf5, numMultiplesOf5);

    // Najdeme součet všech násobků čísla 15 (aby nebyly započítány dvakrát)
    let numMultiplesOf15 = Math.floor((limit - 1) / 15);
    let sumMultiplesOf15 = sumArithmeticSeries(15, 15 * numMultiplesOf15, numMultiplesOf15);

    // Celkový součet
    let totalSum = sumMultiplesOf3 + sumMultiplesOf5 - sumMultiplesOf15;
    return totalSum;
}

// Příklad použití
let limit = 1000;
let result = sumMultiplesOf3And5(limit);
console.log("Součet všech násobků čísla 3 nebo 5 menších než", limit, "je", result);