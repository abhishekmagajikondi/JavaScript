// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.


async function brewCoffee(CoffeType) {
    return new Promise((resolve, reject) => {
        let intervalid = setInterval(() => {
            clearInterval(intervalid)
            resolve("Your Coffee is ready to serve...")
        }, 0 + Math.ceil(Math.random() * 5))
    })
}
async function main() {
    let CoffeType = {
        "Ingridents":"DarkCoffee",
        "Type" : "ColdCoffee",
        "price": 500,
    }
    console.log("script is initailizing..")
    let CoffeInfo = await brewCoffee(CoffeType)
    console.log(CoffeInfo)
}
main()