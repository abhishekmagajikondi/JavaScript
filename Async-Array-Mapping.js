// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.




var NewArray = []
async function Mapping(element) {

    let x = new Promise((resolve, reject) => {
        setTimeout(() => {

            NewArray.push(element * 2)

            resolve(NewArray)
        }, 500)
    })

    return x
}


async function main() {

    console.log("Script is initialzing...")
    let array = [1, 2, 3, 4, 5, 6]
    for (const arr of array) {

        let data = await Mapping(arr)
        
        console.log(data)
    }
}


main();