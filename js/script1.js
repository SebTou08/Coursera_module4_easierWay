(function(window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    var greeting = "Hello ";
    yaakovGreeter.sayHello = function() {
        for (var i = 0; i < names.length; i++) {
            if (names[i][0] == 'J')
                console.log("Good Bye " + names[i]);
        }
        //console.log(greeting + yaakovGreeter.name);
    }

    window.yaakovGreeter = yaakovGreeter;

})(window);