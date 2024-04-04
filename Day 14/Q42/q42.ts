//Question 42: Great Magicians: Add "the Great" to magician names.

//Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.

let magicians: string[] = ["Charis", "David", "Alice"];
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
}
function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
