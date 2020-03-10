class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instânciada')
    }

    static textoParaData(texto){
       return new Date(...texto.split("-").map( (item,indice) => item - indice % 2))
    }

    static dataParaTexto(data){
        //fail fast
        console.log(data)
        // if(!/\d{4}-\d{2}-\d{2}/.test(data))throw new Error('Deve estar formato aaaa-mm-dd');
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}