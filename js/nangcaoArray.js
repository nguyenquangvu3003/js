const products = [
    { id: 1, name: "Apple", price: 10, quantity: 5 },
    { id: 2, name: "Banana", price: 8, quantity: 2 },
    { id: 3, name: "Orange", price: 7, quantity: 3 },
    { id: 4, name: "Mango", price: 15, quantity: 4 },
    { id: 5, name: "Lemon", price: 12, quantity: 0 },
];

//loc ra quantity lon hon 0

const philter = products.filter(product => product.quantity > 0);
console.log(philter);





//tinh tong gia tri
//reduce ( accumulator (giá trị tích lũy qua từng vòng lặp), currentValue (phần tử hiện tại của mảng))

//cach 1
const totalValue = products.reduce((total, product) => {
    return total + product.price * product.quantity;
}, 0);
console.log(totalValue);

//cach 2
let valueTotal = 0;
for (let i = 0; i < products.length; i++ ) {
    valueTotal += products[i].price * products[i].quantity;
};
console.log(valueTotal);





//tim price max
//reduce ( accumulator (giá trị tích lũy qua từng vòng lặp), currentValue (phần tử hiện tại của mảng))

//cach 1
const maxPrice = products.reduce((max, product) => {
    return product.price > max.price ? product : max;
    
});
console.log(maxPrice);

//cach 2
let priceMax = products[0];
for (let index = 1; index < products.length; index++) {
    if (products[index].price > priceMax.price) {
        priceMax = products[index];
    }
    
}
console.log(priceMax);






//tao mang moi chi co nameProduct
// cach 1

const nameProduct = [];
for (const product of products) {
    nameProduct.push(product.name);
}
console.log(nameProduct);

// cach 2

const productName = products.map(product => product.name);
console.log(productName);






 
// sap xep giam dan
// sort làm thay đổi mảng gốc, phải dùng [...products] sao chép mảng

const sortProduct = [...products].sort((a, b) => b.price - a.price);
console.log(sortProduct);







