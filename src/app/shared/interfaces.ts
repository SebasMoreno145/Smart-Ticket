export class ClEvento {
    nombres: string;
    imagen: string[];
    fecha: Date;
    hora: Date;
    lugar: string;
    responsable: string;
    descripcion: string;
    constructor() {    }
}

export interface InEvento {

    id: string;
    nombres: string;
    imagen: string[];
    fecha: Date;
    hora: Date;
    lugar: string;
    responsable: string;
    descripcion: string;
}

