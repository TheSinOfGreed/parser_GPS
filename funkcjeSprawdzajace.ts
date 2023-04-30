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




