//Question 42: Great Magicians: Add "the Great" to magician names.
//Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
var magicians = ["Charis", "David", "Alice"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
