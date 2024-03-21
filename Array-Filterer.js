// 11. The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.


function filterProducts(ProductInfo, filtercriterion) {
    let NewArray = []
    if (filtercriterion == "id") {
        let filtercriterion = prompt("Enter What You want to search with respect to Id number")
        let filteredProducts_id = ProductInfo.filter(product => product.id == filtercriterion);
        NewArray.push(filteredProducts_id)

    } else if (filtercriterion == "name") {
        let filtercriterion = prompt("Enter What You want to search with respect to name ")
        let filteredProducts_name = ProductInfo.filter(product => product.name == filtercriterion);
        NewArray.push(filteredProducts_name)

    } else if (filtercriterion == "price") {
        let filtercriterion = prompt("Enter What You want to search with respect to product price number")
        let filteredProducts_price = ProductInfo.filter(product => product.price < filtercriterion);
        NewArray.push(filteredProducts_price)

    } else if (filtercriterion == "category") {
        let filtercriterion = prompt("Enter What You want to search with respect to category")
        let filteredProducts_category = ProductInfo.filter(product => product.category == filtercriterion);
        NewArray.push(filteredProducts_category)

    }
    return NewArray

}

// Here the Array of ProductInfo Consists of Objects 
let ProductInfo = [{
        id: 1,
        name: "T-shirt",
        price: 20.99,
        category: "Clothing"
    },
    {
        id: 2,
        name: "Running Shoes",
        price: 79.99,
        category: "Footwear"
    },
    {
        id: 3,
        name: "Smartphone",
        price: 699.99,
        category: "Electronics"
    }
]

console.log(ProductInfo)
let searchbar = prompt("Enter what uh want to search ( id , name , category , price ) ?")
let a = filterProducts(ProductInfo, searchbar)
console.log(a)