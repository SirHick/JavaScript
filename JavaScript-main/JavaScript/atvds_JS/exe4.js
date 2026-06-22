const converterTemperatura = (temp) => {
    const formulaF = (temp * 9/5) + 32;
    return formulaF;
}

console.log(converterTemperatura(28));