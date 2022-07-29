export class Persona {
    idpersona?: number;
    nombre: String;
    apellido: String;
    domicilio: String;
    telefono: String;
    correo: String;
    sobreMi: String;
    puesto: String;
    urlFoto: String; //Foto de perfil
    urlLd: String;
    urlGithub: String;
    urlQrLd: String;
    urlFotoBanner: String;
    urlAP: String;
    urlFotoAP: String;
    urlLogin: String;
    urlLogoPortfolio: String;
    urlFotoContacto: String;

    
    constructor (nombre: String, apellido: String, domicilio: String, telefono: String, correo: String, urlLd: String, sobreMi: String, urlFoto: String, puesto: String, urlQrLd: String, urlGithub: String,urlFotoBanner: String, urlAP: String, urlFotoAP: String, urlLogin: String, urlLogoPortfolio: String, urlFotoContacto: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.correo = correo;
        this.sobreMi = sobreMi;
        this.puesto = puesto;
        this.urlFoto = urlFoto;
        this.urlLd = urlLd;
        this.urlQrLd = urlQrLd;
        this.urlGithub = urlGithub;
        this.urlFotoBanner = urlFotoBanner;
        this.urlAP = urlAP;
        this.urlFotoAP = urlFotoAP;
        this.urlLogin = urlLogin;
        this.urlLogoPortfolio = urlLogoPortfolio;
        this.urlFotoContacto = urlFotoContacto;

    }
    
}