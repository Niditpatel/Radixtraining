
import { model_inventory } from "./interface";

// make an array of things of shop by name of products and quntity
var store_item = [
    { name: 'ghee', quntity: 15 },
    { name: 'milk', quntity: 18 },
    { name: 'beans', quntity: 25 },
    { name: 'floar', quntity: 13 },
    { name: 'rice', quntity: 35 },
    { name: 'spices', quntity: 21 }
];
console.table(store_item);

// make the class of model_inventory 
class inventory implements model_inventory {
    name: string;
    quntity: number;

    // for sell products 
    sell(NofProduct: number, name: string) {
        for (let i in store_item) {
            if (store_item[i].name == name) {
                if (store_item[i].quntity < 5) {
                    console.log(`${name} not available for sell more, reorder the product.`);
                } else {
                    store_item[i].quntity -= NofProduct;
                    console.log(`you selled ${NofProduct} qunti of ${name}`);
                    console.log(`Remaining ${name}: ${store_item[i].quntity}`);
                }
            }
        }
    }

    // check product qunti if is less then make reorder for stock 
    reorder(NofProduct: number, name: string) {
        for (let i in store_item) {
            if (store_item[i].name == name) {
                if (store_item[i].quntity > 5) {
                    console.log(`you have enough  ${name}  to sell`);
                } else {
                    store_item[i].quntity += NofProduct;
                    console.log(`updated quntity to ${name}: ${store_item[i].quntity}`);
                }

            }
        }
    }
};
var one_store = new inventory();
// sell milk 
one_store.sell(10, 'milk');
console.table(store_item);
one_store.sell(5, 'milk');
console.table(store_item);
one_store.sell(5, 'milk');
// reorder if qunti is of product is less 
one_store.reorder(20, 'milk');
console.table(store_item);
one_store.sell(5, 'milk');

