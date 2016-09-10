/* Declare and Define the functions here that will make the function calls below work properly */
function first(arr, cb){
  cb(arr[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
function last(arr, cb){
  cb(arr[arr.length - 1]);
}



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.
function contains(arr, str, cb){
  var exists = false;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === str){
      exists = true;
    }
  }
  cb(exists);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
function map(arr, cb) {
  var newNums = arr.slice(0, arr.length);
  for(var i = 0; i < newNums.length; i++) {
    newNums[i] = cb(newNums[i]);
  }
  return newNums;
}

var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
function uniq(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
      for (var x = 0; x < arr.length; x++) {
        if (i !== x) {
          if (arr[i] === arr[x]) {
          arr.splice(x, 1);
          }
        }
      }
    }
      cb(arr);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
function each(arr, cb){
  for(var i = 0; i < arr.length; i++){
    cb(arr[i], i);
  }
}



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
function getUserById(arr, str, cb){
  for(var i = 0; i < arr.length; i++){
    if(arr[i].id === str){
      return cb(arr[i]);
    }
  }
}



var users = [{
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },{
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },{
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },];

getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
function find(arr, cb){
  for(var i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      return arr[i];
    }
  }
}


//Looks through each value in the list, returning the first one that passes a truth test
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){
  return num % 2 === 0; //should return 2
});
