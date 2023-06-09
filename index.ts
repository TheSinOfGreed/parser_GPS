//npm run start
//importy
import { readFile } from 'fs/promises';

//zmienna globalna trzymajaca koncowy wynik
import { wynik } from "./funkcjeSekwencjeNaglowkow";

//funkcje
import { przeanalizuj_linie } from "./funkcjeAnalizujace";
import { czy_linia_poprawna } from './funkcjeSprawdzajace';


readFile('Dane/new1.txt', 'utf8')
.then( daneWejsciowe =>{
    
    //zmienne
    let dane: string[] = daneWejsciowe.split('\n').map( line => line.replace(/\r/g, ''));

    dane.forEach((linia, index) => {
        if(czy_linia_poprawna(linia, index)) przeanalizuj_linie(linia, index);
    });
    
    //** WYPISANIE DANYCH
    if(wynik.satelity.satelity === null) wynik.satelity.czas_ust = null;
    console.log(wynik);
    wynik.satelity.satelity?.forEach((staelita, index) => {
        console.log("Satelita " + (index+1) + ". [" + staelita.identyfikator_PRN + ", " + staelita.wyniesienie_nad_poziom_równika + ", "+ staelita.azymut +  (Number.isNaN(staelita.SNR) ? '' : ", "+staelita.SNR ) + "]");
    });
    
}).catch(err => {console.log(err)});