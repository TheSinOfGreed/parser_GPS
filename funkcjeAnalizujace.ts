//ANALIZA LINI
import { systemy_satelitarne } from "./daneWejsciowe";

export const sprawdz_system_satelitarny = (linia: string, index: number) => {
    const system = systemy_satelitarne.find( s => s.skrot === linia.substring(1, 3));
    console.log(system)
};