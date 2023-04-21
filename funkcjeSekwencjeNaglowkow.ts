export const GGA = (linia_old: string) => {
    const suma = linia_old.substring(linia_old.indexOf('*'));
    const linia = linia_old.substring(0, linia_old.indexOf('*') );
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
        "suma: " + suma + '\n' 
    );
};

export const GSA = (linia_old: string) => {
    const suma = linia_old.substring(linia_old.indexOf('*'));
    const linia = linia_old.substring(0, linia_old.indexOf('*') );
    const linia_podzielona = linia.split(",");

    const naglowek = linia_podzielona[0];
    const tryb = linia_podzielona[1];
    const typ_ustawienia_pozycji = linia_podzielona[2];
    const numery_satelitow = linia_podzielona.slice(3, 15).filter(elem => elem !== '');
    const dop = parseFloat(linia_podzielona[15]);
    const hdop = parseFloat(linia_podzielona[16]);
    const vdop = parseFloat(linia_podzielona[17]);

    console.log("Nagłówek: ", naglowek);
    console.log("Sposob okreslenia pozycji: ", tryb + " " + typ_ustawienia_pozycji);
    console.log("Numery satelitów: ", numery_satelitow);
    console.log("DOP: ", dop);
    console.log("HDOP: ", hdop);
    console.log("VDOP: ", vdop);
    console.log("Suma: ", suma);
    
};

export const GSV = (linia_old: string) => {
    const suma = linia_old.substring(linia_old.indexOf('*'));
    const linia = linia_old.substring(0, linia_old.indexOf('*') );
    const linia_podzielona = linia.split(",");

    const iden = linia_podzielona[0];
    const liczba_linii = parseInt(linia_podzielona[1]);
    const aktualny_numer_linii = parseInt(linia_podzielona[2]);
    const liczba_widocznych_satelitow = parseInt(linia_podzielona[3]);

    // pobierz informacje o satelitach
    const satelity = [];
    for (let i = 4; i < linia_podzielona.length - 1; i += 4) {
        if (linia_podzielona[i] !== "") {
        const identyfikator_PRN = parseInt(linia_podzielona[i]);
        const wyniesienie_nad_poziom_równika = parseFloat(linia_podzielona[i + 1]);
        const azymut = parseFloat(linia_podzielona[i + 2]);
        const SNR = parseInt(linia_podzielona[i + 3]);
        satelity.push({
            identyfikator_PRN,
            wyniesienie_nad_poziom_równika,
            azymut,
            SNR,
        });
        }
    }

    console.log(
        "Identyfikator: " + iden + '\n' +
        "Liczba lini: " + liczba_linii + '\n' +
        "Aktualny numer lini: " + aktualny_numer_linii+ '\n' +
        "Widoczne satelity: " + liczba_widocznych_satelitow+ '\n' +
        "Satellity: \n"+
        satelity.map((item) => {
            return " [" + item.identyfikator_PRN + ", " + item.wyniesienie_nad_poziom_równika + ", " + item.azymut + ", " + item.SNR + "]"
        }) +
        "\nsuma: " + suma + '\n' 
    );
};

export const RMC = (linia_old: string) => {
    const suma = linia_old.substring(linia_old.indexOf('*'));
    const linia = linia_old.substring(0, linia_old.indexOf('*') );
    const linia_podzielona = linia.split(",");
    
    
    const [naglowek, aktualnosc_danych, status, latitude, ns, longitude, ew, predkosc, kat, data, odchylenie, magnetic_direction] = linia_podzielona;

    console.log("Nagłówek:", naglowek);
    console.log("Aktualność danych:", aktualnosc_danych);
    console.log("Status:", status);
    console.log("Szerokość geograficzna:", latitude, ns);
    console.log("Długość geograficzna:", longitude, ew);
    console.log("Prędkość:", predkosc, "węzłów");
    console.log("Kąt śledzenia/poruszania się obiektu:", kat, "stopni");
    console.log("Data:", data);
    console.log("Odchylenie magnetyczne ziemi:", odchylenie, magnetic_direction);
    console.log("Suma: ", suma);
};

export const GLL = (linia_old: string) => {
    const suma = linia_old.substring(linia_old.indexOf('*'));
    const linia = linia_old.substring(0, linia_old.indexOf('*') );
    const linia_podzielona = linia.split(",");
    const naglowek = linia_podzielona[0];
    const latitude = linia_podzielona[1];
    const latitude_hemisphere = linia_podzielona[2];
    const longitude = linia_podzielona[3];
    const longitude_hemisphere = linia_podzielona[4];
    const czas = linia_podzielona[5];
    const status = linia_podzielona[6];
    
    console.log("Nagłówek: ", naglowek);
    console.log("Szerokość geograficzna: ", latitude, latitude_hemisphere);
    console.log("Długość geograficzna: ", longitude, longitude_hemisphere);
    console.log("Czas: ", czas);
    console.log("Status: ", status);
    console.log("Suma: ", suma);
};

export const VTG = (linia_old: string) => {
    const suma = linia_old.substring(linia_old.indexOf('*'));
    const linia = linia_old.substring(0, linia_old.indexOf('*') );
    const linia_podzielona = linia.split(",");
    console.log(
        
        "Naglowek: " + linia_podzielona[0] + '\n' + 
        "Ścieżka poruszania się (w stopniach): " + linia_podzielona[1] + ", " + linia_podzielona[2] + '\n' + 
        "Ścieżka poruszania się na podstawie współrzędnych magnetycznych w stopniach: " + linia_podzielona[3] + ", " + linia_podzielona[4] +  '\n' + 

        "Prędkość w węzłach: " + linia_podzielona[5] + ", " + linia_podzielona[6] +  '\n' + 
        "Prędkość w km/h: " + linia_podzielona[7] + ", " + linia_podzielona[8] +  '\n'  +
        "suma: " + suma + '\n' 
        
    );
};