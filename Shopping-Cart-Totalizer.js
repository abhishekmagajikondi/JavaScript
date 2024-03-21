// 13. The Shopping Cart Totalizer:
//     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.


function calculateTotal(ProductArray) {
    let TotalAmount = 0;
    for (let i = 0; i < ProductArray.length; i++) {
        TotalAmount += (ProductArray[i].Price) * (ProductArray[i].Quantity);
    }
    return TotalAmount

}

let ProductArray = [{
        "name": "Bag",
        "Price": 2100,
        "Quantity": 3,
    },
    {
        "name": "LaptopHp",
        "Price": 21000,
        "Quantity": 1,
    },
    {
        "name": "Earphone",
        "Price": 699,
        "Quantity": 10,
    },
    {
        "name": "Watch",
        "Price": 2199,
        "Quantity": 2,
    },
    {
        "name": "Smartphone",
        "Price": 19000,
        "Quantity": 5,
    }
]

console.log(ProductArray)


console.log(calculateTotal(ProductArray))