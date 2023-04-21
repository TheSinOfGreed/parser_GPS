//SPRAWDZANIE POPRAWNOSCI LINI
let bledy: string[] = [];

export const sprawdz_poprawnosc_lini = (linia: string, index: number): string[] => {
    bledy = [];

    czy_$(linia, index);//każda linia musi zaczynać się znakiem dolara ($) i kończyć znakiem nowej linii (\r)
    czy_80_znakow(linia, index);//długość linii nie może przekraczać 80 znaków (plus znak początku linii i znak nowej linii)

    return bledy;
};

const czy_$ = (linia: string, index: number): void => {
    if(linia[0] !== '$') bledy.push("Brak '$' w lini: " + index);
};

const czy_80_znakow = (linia: string, index: number): void =>{
    if(linia.length > 80) bledy.push("80 > lini: " + index);
};




