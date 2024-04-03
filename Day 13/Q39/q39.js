//Question 39: City Names: Formatting city-country pairs.
//Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.
function cityCountry(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, ",").concat(country));
}
console.log(cityCountry("Karachi"));
console.log(cityCountry("Lahore"));
console.log(cityCountry("Islamabad"));
