//ANALIZA LINI
import { systemy_satelitarne } from "./daneWejsciowe";
import system_satelitarny from "./Interface/system_satelitarny.interface";

export const przeanalizuj_linie = (linia: string, index: number) => {
    const system: system_satelitarny | string = sprawdz_system_satelitarny(linia, index);
    if(typeof(system) === "string"){
        console.log("Nie rozpoznano systemu satelitarnego o nazwie: " + system);
    }else{
        console.log("dalej");
    }
}

export const sprawdz_system_satelitarny = (linia: string, index: number): string | system_satelitarny  => {
    const system: system_satelitarny | undefined = systemy_satelitarne.find( s => s.skrot === linia.substring(1, 3));
    if(system === undefined){
        return linia.substring(1, 3);
    }else{
        return system;
    }
};