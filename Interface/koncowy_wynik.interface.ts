export interface koncowy_wynik {
    informacje_systemowe: {
        data: string | null,
        czas: string | null,
        odchylenie_magnetyczne: string | null,
        wysokosc_genoid: string | null,
        okreslenie_pozycji: string | null,
        jakos: string | null,
        suma: string | null
    },
    pozycja: {
        szerokosc: string | null,
        dlugosc: string | null,
        predkosc: string | null,
        kat_przemieszczania: string | null,
        npm: string | null,
        precyzja_hor: string | null | number,
        precyzja_wert: string | null | number,
        precyzja_ogolna: string | null | number,
        liczba_sledz_sat: string | null | number,
        numbery_satelitow: string[] | null,
        status: string | null,
        sciezka_poruszania_sie: number | null | string,
        sciezka_poruszania_sie_magn: number | null | string,
        predkosc_km: number | null | string,
    }
    satelity: {
        czas_ust: string | null,
        widoczne_sat: string | null | number,
        satelity: {identyfikator_PRN: number, wyniesienie_nad_poziom_równika: number, azymut: number, SNR: number}[] | null,
    }
}