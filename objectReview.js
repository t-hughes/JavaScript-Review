//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Your code here
var favoriteThings = {
  band: 'Too Many',
  food: 'Chicken Parmesan',
  person: 'Family',
  book: 'Ender\'s Game',
  movie: 'Too Many',
  holiday: 'Christmas'
};
//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Your code here
favoriteThings.car = 'Tesla Model s';
favoriteThings.brand = 'Vans';
//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Your code here
favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';
//Now, alert your favorite person, then alert your favorite book.

  //Your code here
alert(favoriteThings.person);
alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
};

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  //Your code here
for(var key in user){
  if(!user[key]){
    delete user[key];
  }
}
//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Your code here
user.name = 'Talon';
user.username = 'Thughes';
user.pwHash = 'wergnwrgwrg';
//Now console.log your object and make sure it looks right.

  //Your code here
console.log(user);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection.

  //Your code here

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console.

  //Your code here

//Now call your alertHello and logHello methods.

  //Your code here



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};
