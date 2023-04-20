//npm run start
import { daneWejsciowe } from "./daneWejsciowe";

//funkcje
import { sprawdz_poprawnosc_lini } from "./funkcjeSprawdzajace";

//zmienne
let dane: string[] = daneWejsciowe.split('\n');
let bledy: string[] = [];

//kod
dane.forEach((linia, index) => {
    bledy = [...bledy, ...sprawdz_poprawnosc_lini(linia, index)];
});
console.log(bledy)
