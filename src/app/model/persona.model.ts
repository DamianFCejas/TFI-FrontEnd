export class Persona {
    idpersona?: number;
    nombre: String;
    apellido: String;
    domicilio: String;
    telefono: String;
    correo: String;
    fechaNac: String;
    sobreMi: String;
    urlFoto: String;
    puesto: String;

    
    constructor (nombre: String, apellido: String, domicilio: String, telefono: String, correo: String, fechaNac: String, sobreMi: String, urlFoto: String, puesto: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.correo = correo;
        this.fechaNac = fechaNac;
        this.sobreMi = sobreMi;
        this.urlFoto = urlFoto;
        this.puesto = puesto;
    }
    
}