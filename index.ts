//npm run start
import { zestaw1 as daneWejsciowe } from "./daneWejsciowe";
import { wynik } from "./funkcjeSekwencjeNaglowkow";

//funkcje
import { sprawdz_poprawnosc_lini } from "./funkcjeSprawdzajace";
import { przeanalizuj_linie } from "./funkcjeAnalizujace";

//zmienne
let dane: string[] = daneWejsciowe.split('\n');
let bledy: string[] = [];

//kod
dane.forEach((linia, index) => {
    bledy = [...bledy, ...sprawdz_poprawnosc_lini(linia, index)];
});

if(bledy.length !== 0){
    console.log("ERROR/S: " + bledy);
}else{
    dane.forEach((linia, index) => {
        przeanalizuj_linie(linia, index);
    });
    console.log(wynik);
}
