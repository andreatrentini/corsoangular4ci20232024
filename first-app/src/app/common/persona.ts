export class Persona {
    private nome: string;
    private cognome: string;

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
    }

    get Nome() {
        return this.nome;
    }

    set Nome(nuovoNome: string) {
        this.nome = nuovoNome;
    }


}
