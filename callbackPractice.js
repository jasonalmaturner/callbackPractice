/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function(firstName){
  console.log('The first name in names is ' + firstName)
};

var getFirstName = function(arr, callBack){
  var name1 = arr[0];
  callBack(name1);
};

getFirstName(names, first);

var last = function(arr, cb){
  var name2 = arr[arr.length - 1];
  cb(name2);
};

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});

var multiply = function(firstNum, secondNum, callB){
  var productAnswer = firstNum * secondNum;
  callB(productAnswer);
};

multiply(num1, num2, function(answer){
  console.log('The answer is ' + answer);
});

var contains = function(arr, someName, callBa){
  var yes = false;
  if(arr.indexOf(someName) !== -1){
    var yes = true;
  }
  callBa(yes);
}

contains(names, 'Colt', function(yes){
  if(yes === true){
    'Colt is in the array';
  } else {
    'Colt is not in the list';
  }
});

var uniq = function(arr, cBack){
    newNames = [];
    for(var i = 0; i < arr.length; i++){
        if(newNames.indexOf(arr[i]) === -1){
            newNames.push(arr[i]);
        }
    }
    cBack(newNames);
};

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ' + uniqArr);
});

var each = function (arr, calBac) {
    for (var i = 0; i < arr.length; i++) {
        var place = i;
        var name = arr[i];
        calBac(name, place);
    }
}

each(names, function (item, indice) {
    alert('The item in the ' + indice + ' position is ' + item);
});

var each =
each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function(id, callUser){
    for(var i = 0; i < users.length; i++){
        if(id === users[i].id){
            callUser(users[i]);
        }
    }
};

getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});







