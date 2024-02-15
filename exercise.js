// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

const createInstructor = (firstName, lastName) => {
    return {
      firstName,
      lastName
    }
};

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }
  
// instructor[favoriteNumber] = "That is my favorite!"

const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber] : "That is my favorite!"
};

// var instructor2 = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
// }

const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
};

const createAnimal = (species, soundFunc, sound) => {
    return {
        species,
        [soundFunc](){console.log(sound);}
    }
;}
