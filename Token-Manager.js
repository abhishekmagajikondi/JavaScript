// 12. The Token Manager:
//     You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.


function setAuthToken(authenticationToken) {
    const now = new Date();
    // if you want time in correct form write "now.toString()  "
    // Gives the time in integer easy to compare 
    let x = now.getTime();

    let Authentication = {
        "authenticationToken": authenticationToken,
        "ExpirationTime": x,
    }
    // convert to string using json
    let str = JSON.stringify(Authentication)

    localStorage.setItem("key", str)
    console.log("Your Data have been stored successfully on the local storage of firefox")
}

function GetAuthToken(fetch) {
    const token = localStorage.getItem(fetch)
    console.log("Token is Fetched from th local storage is ",token)
   
    let v = JSON.parse(token)
    console.log("Paresed token is ",v)
    const dateAfter = new Date();
    console.log("Time at which the GetAuthToken function is called ",dateAfter)
    if (dateAfter.getTime() > v.ExpirationTime){
        localStorage.removeItem(fetch)
        console.log("Removed Item successfully")
    }
}
let token = prompt("Enter The Token Id of For Authentication...")
if(token != null){
    setAuthToken(token)
}
let EnterVal = prompt("Enter the unique key to delete from localstorage..")
GetAuthToken(EnterVal)



// Output
// Your Data have been stored successfully on the local storage of firefox 12solution.js:19:13


// Token is Fetched from th local storage is  {"authenticationToken":"2","ExpirationTime":1711012536136} 12solution.js:24:13
// Paresed token is  
// Object { authenticationToken: "2", ExpirationTime: 1711012536136 }
// 12solution.js:27:13
// Time at which the GetAuthToken function is called  
// Date Thu Mar 21 2024 14:45:42 GMT+0530 (India Standard Time)
// 12solution.js:29:13
// Removed Item successfully