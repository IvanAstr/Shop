import {makeAutoObservable} from "mobx";

class Basket{
    poducts = [

    ]

    constructor(){
        makeAutoObservable(this)
    }

    addPoducts(product){
        this.poducts.push(product)

    }
    removePoducts(id){
        this.poducts = this.poducts.filter(product => product.id !== id)
    }

}

export default new Basket();