// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.


let pass = prompt("Enter The Password..")


function containsUppercase(pass) {
    return /[A-Z]/.test(pass);
}

function containsLowercase(pass) {
    return /[a-z]/.test(pass);
}

function containsDigit(pass) {
    return /[0-9]/.test(pass);
}

// conditions
if(pass.length>=8){
    if (containsUppercase(pass) && containsLowercase(pass) && containsDigit(pass))
    {
        console.log("Your Password has been verified Successfully...!")
    } 
    else{
        console.log("Please Enter one Uppercase , one lowercase and one digit from (0-9) to get your password verified")
    }
}
else{
    alert("Enter a valid password upto 8 length")
}