//ANALIZA LINI
import system_satelitarny from "./Interface/system_satelitarny.interface";
import { systemy_satelitarne } from "./daneWejsciowe";

import identyfikator_naglowka from "./Interface/indetyfikator_naglowka";
import { identyfikatory_naglowka } from "./daneWejsciowe";


export const przeanalizuj_linie = (linia: string, index: number) => {
    const system: system_satelitarny | string = sprawdz_system_satelitarny(linia, index);
    if(typeof(system) === "string"){
        console.log(index + ". Nie rozpoznano systemu satelitarnego o nazwie: " + system);
    }else{
        console.log(index + ". System satelitarny: " + system.pelna_nazwa + "(" + system.skrot + ")");
        const identyfikator : string | identyfikator_naglowka =  sprawdz_naglowek(linia, index);
        if(typeof(identyfikator) === "string"){
            console.log("Nie rozpoznano identyfikatora o nazwie: " + identyfikator + " w systemie " + system);
        }else{
            console.log(identyfikator.pelna_nazwa);
        }
    }
    console.log('\n');
}

export const sprawdz_system_satelitarny = (linia: string, index: number): string | system_satelitarny  => {
    const system: system_satelitarny | undefined = systemy_satelitarne.find( s => s.skrot === linia.substring(1, 3));
    if(system === undefined){
        return linia.substring(1, 3);
    }else{
        return system;
    }
};

export const sprawdz_naglowek = (linia: string, index: number): string | identyfikator_naglowka => {
    const identyfikator: identyfikator_naglowka | undefined = identyfikatory_naglowka.find( i => i.skrot === linia.substring(3, 6));
    if(identyfikator === undefined){
        return linia.substring(3, 6);
    }else{
        return identyfikator;
    }
}