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
        precyzja_hor: string | null,
        precyzja_wert: string | null,
        precyzja_ogolna: string | null,
        liczba_sledz_sat: string | null,
        numbery_satelitow: string[] | null,
        status: string | null
    }
    satelity: {
        czas_ust: string | null,
        widoczne_sat: string | null,
        satelity: {id: string, wyniesienie: string, azymut: string, snr: string}[] | null,
    }
}