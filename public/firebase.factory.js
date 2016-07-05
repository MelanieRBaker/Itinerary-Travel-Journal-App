angular.module('app')
  .factory('firebaseFactory', ($location, $timeout, $http) => {

    let currentUser = null

    // Listener that fires on login state of change
    firebase.auth().onAuthStateChanged(function(user) {
      // User is authenticated
      if (user) {
        currentUser = user;
        $location.path('/travel');
        $timeout()
      // User is NOT authenticated
      } else {
        console.log("Not authenticated");
        currentUser = null;
        $location.path('/login');
        $timeout()
      }
    });


    // making of the object via users info, be registering, firebase returns an object that we call user on line 36, then we pass user into this function to have the objects information then make an object called newUser.
    createUser = function (user) {
      let newUser = { // here we make two keys and add the firebase objects keys values to the keys we made
        email: user.email,
        uid: user.uid,
      }
      $http.post(`https://pro-planet-134118.firebaseio.com`, newUser).then(); // here we post to firebase via the key we made in firebase called user. The second argument 'newUser' is the object we made to be posted in firebase.
    }


    // This is all being returned into firebaseFactory for used elsewhere
    return {
      // register function and grabs users info from createUser function below
      register (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => createUser(user)) // This, once the user registers, make an argument called user, that does a function called createUser and pass in the arugment user. The function on line 22 is where it is being executed
        .catch(function(error) {
          // Handle Errors here.
          console.log("Error via register function", error.message);
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      },
      // login function
      login (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then
        .catch(function(error) {
          // Handle Errors here.
          console.log("Error via loging function", error.message);
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      },
      // returning currentUser so it can be accessed through 'firebaseFactory' in other files
      getUser () {
        return currentUser;
      },
      logout (){
        firebase.auth().signOut().then(function() {
          console.log("logout");
        }, function(error) {
          console.log("error");
        })
     }
    }

})
