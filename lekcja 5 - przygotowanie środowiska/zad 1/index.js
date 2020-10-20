const year = 1992;


const czyTenRokJestPrzestępny = () => {
    if ((((year % 4) === 0) && ((year % 100) !== 0)) || ((year % 400) === 0)) {
        console.log("przestępny");
    } else {
        console.log("kapa, ziomek");
    }
}

czyTenRokJestPrzestępny();
