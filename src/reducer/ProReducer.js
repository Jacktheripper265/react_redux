import { product } from "../product";

const init={pro:[
    new product(1,"shampoo",10,5,"image/a.jpg"),
    new product(2,"conditioner",20,2,"image/d.jpg"),
    new product(3,"deo",20,5,"image/b.jpg"),
    new product(4,"powder",20,5,"image/c.jpg")]};

export const ProReducer=(state=init,action)=>{

    switch(action.type)
    {
        case 'ADDPRODUCT':
            return{
                ...state,
                pro: [...state.pro, action.Data]
            }

        default:
            return state
    }
    

}