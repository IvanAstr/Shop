import {makeAutoObservable} from "mobx";

class Basket{
    poducts = [

    ]
    myProduct = [
        
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

    findProduct(index){
        this.myProduct = this.poducts[index];
    }
    // costAndQuantity(cost,quantity,index){
    //     this.poducts.push(product)

    // }

}

export default new Basket();