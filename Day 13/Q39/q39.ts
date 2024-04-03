//Question 39: City Names: Formatting city-country pairs.

//Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.

function cityCountry(city : string , country : string = "pakistan"){
    console.log(`${city},${country}`)
}

console.log (cityCountry("Karachi"));
console.log (cityCountry("Lahore"));
console.log (cityCountry("Islamabad"));