//SPRAWDZANIE POPRAWNOSCI LINI //!PRZED ANALIZA LINI
export const czy_linia_poprawna = (linia: string, index: number): boolean => {
    if(!czy_$(linia, index)){
        console.log(index + ". Brak symbolu otwierajacego '$' .\n");
        return false;
    }else if(!czy_80_znakow(linia, index)){
        console.log(index + ". Więcej niż 80 znaków.\n");
        return false;
    }else{
        return true;
    }
};

const czy_$ = (linia: string, index: number): boolean => {
    if(linia[0] !== '$') return false;
    else return true;
};

const czy_80_znakow = (linia: string, index: number): boolean =>{
    if(linia.length > 80) return false;
    else return true;
};

//SPRAWDZANIE POPRAWNOSCI LINI //!PO ANALIZIE LINI

export const czy_linia_poprawna2 = (linia: string, index: number, liczba_przecinkow: number[], suma: string): boolean => {
    let czy_suma_ok: boolean = false;
    // let czy_liczba_przecinkow_ok: boolean = false;

    if(suma.toUpperCase() === "*"+sprawdz_sume_kontrolna(linia).toUpperCase()) czy_suma_ok = true;
    else                                       console.log("Niepopoprawna suma kontrolna!" + suma + " " + sprawdz_sume_kontrolna(linia));

    // liczba_przecinkow.forEach( nr_przecinka => {
    //     if(nr_przecinka === sprawdz_przecinki(linia)) czy_liczba_przecinkow_ok = true;
    // });

    // if(!czy_liczba_przecinkow_ok){
    //     console.log("Niepoprawna ilość przecinków");
    //     return false
    // }else if(czy_suma_ok && czy_liczba_przecinkow_ok){
    //     return true;
    // }else{
    //     return false;
    // }

    return czy_suma_ok;
     
    
}

const sprawdz_przecinki = (sentence: string): number => {
    return sentence.split('').filter(ch => ch === ',').join('').length;
}

const sprawdz_sume_kontrolna = (sentence: string): string => {
    let checksum = 0;
  
    // Iterujemy po każdym znaku w zdaniu
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence.charAt(i);
  
      // Jeśli napotkamy znak '*' to kończymy sumowanie i zwracamy obliczoną sumę kontrolną
      if (char === "*") {
        return checksum.toString(16);
      }
  
      // Jeśli napotkamy znak '$', ustawiamy sumę kontrolną na 0 i kontynuujemy sumowanie od następnego znaku
      if (char === "$") {
        checksum = 0;
        continue;
      }
  
      // Wykonujemy operację XOR na kodzie ASCII znaku i aktualnej sumie kontrolnej
      checksum ^= char.charCodeAt(0);
    }
  
    // Jeśli nie ma sumy kontrolnej w zdaniu, zwracamy obliczoną sumę kontrolną
    return checksum.toString(16);
}




