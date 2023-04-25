//npm run start
//importy
import { readFile } from 'fs/promises';

//zmienna globalna trzymajaca koncowy wynik
import { wynik } from "./funkcjeSekwencjeNaglowkow";

//funkcje
import { przeanalizuj_linie } from "./funkcjeAnalizujace";


readFile('Dane/zestaw3.txt', 'utf8')
.then( daneWejsciowe =>{
    
    //zmienne
    let dane: string[] = daneWejsciowe.split('\n').map( line => line.replace(/\r/g, ''));

    dane.forEach((linia, index) => {
        przeanalizuj_linie(linia, index);
    });
    
    console.log(wynik);
    wynik.satelity.satelity?.forEach((staelita, index) => {
        console.log("Satelita " + (index+1) + ". [" + staelita.identyfikator_PRN + ", " + staelita.wyniesienie_nad_poziom_równika + ", "+ staelita.azymut + ", "+ staelita.SNR + "]");
    });
    
}).catch(err => {console.log(err)});