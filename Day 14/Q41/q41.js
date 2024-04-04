//Question 41: Magicians: Display magician names from an array.
//Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
var magician = ["Alice", "David", "Charis"];
function show_magician(magician) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
show_magician(magician);
