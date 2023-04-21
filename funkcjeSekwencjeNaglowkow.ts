export const GGA = (linia: string) => {
    const linia_podzielona = linia.split(",");
    
    const naglowek: string = linia_podzielona[0];
    const aktualnosc_danych: string = linia_podzielona[1].substring(0, 2) + ":" + linia_podzielona[1].substring(2, 4) + ":" + linia_podzielona[1].substring(4, 6);
    const latitude: string = linia_podzielona[2].substring(0, 2) + " deg " + linia_podzielona[2].substring(2, 8) + "' " +  linia_podzielona[3];
    const longitude: string = linia_podzielona[4].substring(0, 2) + " deg " + linia_podzielona[4].substring(2, 8) + "' " +  linia_podzielona[5];
    const jakosc_pomiaru: string = linia_podzielona[6];
    const sledzone_satelity: string = linia_podzielona[7];
    const HDOP: string = linia_podzielona[8];
    const NPM: string = linia_podzielona[9] + ", " + linia_podzielona[10];
    const wysokosc_genoid: string = linia_podzielona[11] + ", " + linia_podzielona[12];
    const numer_ID: string = linia_podzielona[13];
    const suma_kontrolna: string = linia_podzielona[14];
    
    console.log(
        "naglowek: " + naglowek + '\n' +
        "aktualność danych: " + aktualnosc_danych +'\n' +
        "szerokość geograficzna (latitude): " + latitude +'\n' +
        "długość geograficzna (longitude):  " + longitude +'\n' +
        "jakość pomiaru: " + jakosc_pomiaru +'\n' +

        "liczba śledzonych satelitów: " + sledzone_satelity +'\n' +
        "horyzontalna dokładność pozycji (HDOP): " + HDOP +'\n' +
        "wysokość w metrach nad poziom morza: " + NPM +'\n' +
        "wysokość geoid (powyżej elipsoidy WGS84): " + wysokosc_genoid +'\n' +
        "numer ID stacji DGPS: " + numer_ID +'\n' +

        "suma kontrolna: " + suma_kontrolna 
    );
};

export const GSA = (linia: string) => {
    const linia_podzielona = linia.split(",");
    console.log(linia_podzielona);
};

export const GSV = (linia: string) => {
    const linia_podzielona = linia.split(",");
    console.log(linia_podzielona);
};

export const RMC = (linia: string) => {
    const linia_podzielona = linia.split(",");
    console.log(linia_podzielona);
};

export const GLL = (linia: string) => {
    const linia_podzielona = linia.split(",");
    console.log(linia_podzielona);
};

export const VTG = (linia: string) => {
    const linia_podzielona = linia.split(",");
    console.log(linia_podzielona);
};