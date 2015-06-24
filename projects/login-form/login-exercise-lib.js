(function(){
    var login;
    var loginWithCallback;

    login = function(username, password) {
        var success, statusMessage;
        success = password === username;
        if(success) {
            statusMessage = "logged in successfully";
        } else {
            statusMessage = "login failed";
        }
        console.log("User", username, statusMessage);
        return success;
    }

    loginWithCallback = function(username, password, callback) {
        var delay = 3000; // ms = 3 seconds
        window.setTimeout(function() {
            var success = login(username,password);
            callback(success);
        },delay);
    }
    
    window.loginApp = {
        
        // A function that will return true if the username matches the password
        // and false otherwise
        // USAGE:
        //  var result = window.loginApp.login(username, password);
        login: login,
        // A function that performs an asychronous login procedure, invoking the callback
        // function with true/false depending on success
        // USAGE:
        //  var callback = function(success) {}
        //  window.loginApp.loginWithCallback(username, password, callback);
        loginWithCallback: loginWithCallback
    };
}).call();