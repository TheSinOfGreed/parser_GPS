//ANALIZA LINI
import { systemy_satelitarne } from "./daneWejsciowe";
import system_satelitarny from "./Interface/system_satelitarny.interface";

export const sprawdz_system_satelitarny = (linia: string, index: number): string | system_satelitarny  => {
    const system: system_satelitarny | undefined = systemy_satelitarne.find( s => s.skrot === linia.substring(1, 3));
    if(system === undefined){
        return "Nie rozpoznany system satelitarny."
    }else{
        return system;
    }
};