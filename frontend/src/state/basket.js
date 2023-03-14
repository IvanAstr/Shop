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
    removePoducts(index){
        // this.poducts = this.poducts.filter(product => product.id !== id)
        this.poducts.splice(index,1);
    }

    // costAndQuantity(cost,quantity,index){
    //     this.poducts.push(product)

    // }

}

export default new Basket();