//Question 38: Cities: Describing cities with a function.
//Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.
function describe_city(city, contry) {
    if (contry === void 0) { contry = "Pakistan"; }
    console.log("".concat(city, ", ").concat(contry));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Islamabad");
