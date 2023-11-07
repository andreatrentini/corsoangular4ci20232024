export class Messaggio {
    private dataOra: Date;
    private testo: string;

    constructor(dataOra: Date, testo: string) {
        this.dataOra = dataOra;
        this.testo = testo;
    }

    get toString() {
        return this.dataOra.toLocaleString() + ':' + this.testo;
    }
}
