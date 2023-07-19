import { Product, taxCalculation } from "./06-functions-destructuring";

const shoppingCart: Product[] =[
  {
    description: 'Xiaomi',
    price: 100 
   },
   {
    description: 'Iphone X',
    price: 150
   }
];

const [total, tax] = taxCalculation({
  tax: 0.15,
  products: shoppingCart
})

console.log('Total', total);
console.log('Tax', tax);

