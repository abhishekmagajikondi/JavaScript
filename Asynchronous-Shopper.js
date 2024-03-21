// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


async function placeOrder(OrderDetails) {
    return new Promise((resolve, reject) => {
        let intervalid = setInterval(() => {
            let Orderid = Math.ceil(0 + Math.random()*100)
            clearInterval(intervalid)
            resolve(`Your Order Have been Placed Successfully... with Order Id = ${Orderid}`)
        }, 0 + Math.ceil(Math.random() * 5));
    })

}



async function main(){
    let OrderDetails = {
        "Item Name": "Boost",
        "Quantity": 3,
        "Price": 1200,
    }
    let YourMessage = await placeOrder(OrderDetails)
    console.log(YourMessage)
}

main()