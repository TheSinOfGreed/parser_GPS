//npm run start
import { daneWejsciowe } from "./daneWejsciowe";

//funkcje
import { sprawdz_poprawnosc_lini } from "./funkcjeSprawdzajace";
import { sprawdz_system_satelitarny } from "./funkcjeAnalizujace";

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
        sprawdz_system_satelitarny(linia, index);
    });
}
