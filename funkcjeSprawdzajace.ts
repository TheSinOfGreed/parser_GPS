let bledy: string[] = [];

export const sprawdz_poprawnosc_lini = (linia: string, index: number): string[] => {
    bledy = [];
    czy_$(linia, index);
    return bledy;
};

const czy_$ = (linia: string, index: number): void => {
    if(linia[0] !== '$') bledy.push("Brak '$' w lini: " + index);
};

const czy_80_znakow = (linia: string, index: number): void =>{
    if(linia.length > 80) bledy.push("");
};

//długość linii nie może przekraczać 80 znaków (plus znak początku linii i znak nowej linii)



