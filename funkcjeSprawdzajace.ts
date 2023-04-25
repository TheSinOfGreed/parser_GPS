//SPRAWDZANIE POPRAWNOSCI LINI
export const czy_$ = (linia: string, index: number): boolean => {
    if(linia[0] !== '$') return false;
    else return true;
};

export const czy_80_znakow = (linia: string, index: number): boolean =>{
    if(linia.length > 80) return false;
    else return true;
};




