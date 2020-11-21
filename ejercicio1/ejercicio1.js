// El 1r problema es que a medida que vaya creciendo el programa y se vayan incrementando servicios el código irá creciendo con más if elses.
// Para evitar esto se usa el strategy pattern que permite eliminar los condicionales ya que te es indiferente los servicios que tenga contratado el usuario.

//De la misma forma con el premiumContent que ha medida que vaya creciendo se puede incrementar el número de if elses así que también se usa el pattern strategy

//La solución está en el diagrama y en el pseudocódigo.
class RegisteredUser{

    constructor(services = []){
        this.services = services;
    }

    getTotal () {
        let total = 0;

        this.services.forEach(service, index => {
            let multimediaContent = service.getMultimediaContent();
            total += service.getPrice ();

            if(multimediaContent.additionalFee){
                total += multimediaContent.additionalFee.getFee();
            }

        });

        return total;
    }
}


// ejemplo de como serían las classes y las interfaces.

interface IService {
    public function getMultimediaContent();
    public function getPrice();
}


class StreamingService implements IService {

    constructor(){

    }

    public function getMultimediaContent(){
        /* ... */

    }

    public function getPrice(){
        return this.getMultimediaContent().streamingPrice;
    }
}

class DownloadService implements IService {

    constructor(){

    }

    public function getMultimediaContent(){
        /* ... */

    }

    public function getPrice(){
        return this.getMultimediaContent().downloadPrice;
    }
}

interface IFee {
    public function getFee();
}


class PremiumContent implements IFee {

    constructor(fee = 0){
        this.additionalFee = fee;
    }

    public function getFee(){
        return this.additionalFee;
    }
}
