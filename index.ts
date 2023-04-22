//npm run start
//importy
import { readFile } from 'fs/promises';

//zmienna globalna trzymajaca koncowy wynik
import { wynik } from "./funkcjeSekwencjeNaglowkow";

//funkcje
import { sprawdz_poprawnosc_lini } from "./funkcjeSprawdzajace";
import { przeanalizuj_linie } from "./funkcjeAnalizujace";


readFile('Dane/zestaw2.txt', 'utf8')
.then( daneWejsciowe =>{
    
    //zmienne
    let dane: string[] = daneWejsciowe.split('\n').map( line => line.replace(/\r/g, ''));
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
        wynik.satelity.satelity?.forEach((staelita, index) => {
            console.log("Satelita " + (index+1) + ". [" + staelita.identyfikator_PRN + ", " + staelita.wyniesienie_nad_poziom_równika + ", "+ staelita.azymut + ", "+ staelita.SNR + "]");
        });
    }
}).catch(err => {console.log(err)});