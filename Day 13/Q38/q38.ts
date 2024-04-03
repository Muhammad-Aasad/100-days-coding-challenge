//Question 38: Cities: Describing cities with a function.
//Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.

function describe_city(city : string, contry :string  = "Pakistan"){
    console.log(`${city}, ${contry}`)
}

describe_city("Karachi")
describe_city("Lahore")
describe_city("Islamabad")