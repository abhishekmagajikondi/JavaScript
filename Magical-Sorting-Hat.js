// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

console.log("Script is Initializing...")

var ArrNames = ["Abhishek" , "Sam" , "Sachin" , "Ravindrasingh" , "Aman" , "Ayushhiremath"]


var house = []

for (const name of ArrNames) {
    if(name.length<6)
    {
        house.push("Gryffindor")
    }
    else if(name.length<8)
    {
        house.push("Hufflepuff")
    }
    else if(name.length<12)
    {
        house.push("Ravenclaw")
    }
    else if(name.length>=12)
    {
        house.push("Slytherin")
    }

}
console.log(house)
