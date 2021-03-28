(function(window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var johnGreeter = {};
    johnGreeter.name = "John";
    var greeting = "Hi ";
    johnGreeter.sayHi = function() {
        for (var i = 0; i < names.length; i++) {
            if (names[i][0] != 'J') {
                console.log("Hello " + names[i]);
            }
        }
        // console.log(greeting + johnGreeter.name);
    }

    window.johnGreeter = johnGreeter;

})(window);