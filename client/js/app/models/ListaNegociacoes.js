class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];

        // this._contexto =contexto;
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        // this._negociacoes = [].concat(this._negociacoes,negociacao);
        // Reflect.apply(this._armadilha,this._contexto,[this]);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];

        // Reflect.apply(this._armadilha,this._contexto,[this]);
    }
}