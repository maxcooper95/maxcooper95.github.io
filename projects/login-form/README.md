
# Getting Started

We are going to be creating a login form that looks like this

![Intro](https://raw.githubusercontent.com/OperationSpark/login-form/master/readme-assets/intro.png)

- Log into c9.io in incognito mode
- Run `opspark install` from terminal
- Choose the `login-form` project
- Navigate to the `login-form` directory that is created and open `index.html`

# 1 - HTML only

Edit `index.html` so that the web page looks like this:

![Step 1](https://raw.githubusercontent.com/OperationSpark/login-form/master/readme-assets/step-1.png)

You will need to use se the following HTML elements:

    <input>
    <button>

# 2 - HTML only

Try entering something into the username and password fields.

![Step 2](https://raw.githubusercontent.com/OperationSpark/login-form/master/readme-assets/step-2.png)

When you type into the password field, it should not show the charachters. How do you make a HTML password input? Search Google or find the answer on MDN and then edit your `index.html` file to create a password input instead of a standard text input. 

# 3 - HTML Again

![Step 3](https://raw.githubusercontent.com/OperationSpark/login-form/master/readme-assets/step-3.png)

Set the HTML page title to say “Login Here”

# 4 - HTML and CSS!

![Step 4](https://raw.githubusercontent.com/OperationSpark/login-form/master/readme-assets/step-4.png)

Create a `div` element with an `id` of `login` that contains your elements.

Style it using CSS!

Give the `<div>` a border

    border: 1px solid black

and padding:

    padding: 20px

Then give the div a background color. 

# 5 - Use CSS only

![Step 5](https://raw.githubusercontent.com/OperationSpark/login-form/master/readme-assets/step-5.png)

Style the container div by giving it a width of 325 pixels

    width: 325px;

Now change the layout of the form so that it mateches the image above. You will want to style the `<input>` elements so that they take up the entire
width of their container.

# 6 - Javascript Time!

![Step 6](https://raw.githubusercontent.com/OperationSpark/login-form/master/readme-assets/step-6.png)

When user clicks “Login”, get the text of the username and password fields and store them in variables

    var username = ???;
    var password = ???;

Then call the following code

    window.loginApp.login(username, password);

Open the console. You should see a message printed there.  

# 7 - Javascript + HTML + CSS


The `window.loginApp.login()` function returns `true` if the user logs in with the correct username and password. 

If the login succeeds, we want to change the web page to a different URL. Read up on the [document.location property](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) and then change the web page to this URL when the login succeeds.

    http://i.imgur.com/zleA9GJ.gif

# 8 - Javascript

![Step 8](https://raw.githubusercontent.com/OperationSpark/login-form/master/readme-assets/step-8.png)

If the the login fails, we would like to show an error to the user. 

Add a `<div>` to your HTML which will contain your error message. Use CSS to make all text in that div red. 

Then, if `window.loginApp.login()` returns `false`, set the text on the `<div>` by using the [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) property. 


# 9 - Callbacks!

The `window.loginApp.loginWithCallback()` function works like `login()` except it uses a callback function instead of a return value. If you defined a `callback` function that looks like this

    var callback = function(success) {
        console.log("success = ",success);
    };

And then call:

    window.loginApp.loginWithCallback(username, password,callback);

The `callback` function will be called with the result of the login. 

Change your code to use `window.loginApp.loginWithCallback()`

`loginWithCallback()` simulates a network request, which may not finish immediately. Expect to wait several seconds before you see your callback called. 

# 10 - Javascript

![Step 10](https://raw.githubusercontent.com/OperationSpark/login-form/master/readme-assets/step-10.png)

While we are checking if the login succeeds, we want to do two things:

- Disable the login button 
- Display a spinner

Once the login is complete, we want to enable the login button again and hide the spinner. 

To enable or disable a button you can use the HTML attribute `disabled`. In javascript if you have an Element, you can change an attribute of that element using [setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) and [removeAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute)

To display a spinner, first create an image element that uses the following URL

    <img src="spinner.gif">

Then use the CSS [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) property to show and hide the element. 


# Bonus 1

Figure out how to place your login form in the center of the page. 

# Bonus 2

Use the [background-image CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) to put an image of your choice behind your login form.

# Bonus 3

Enable/Disable the login button as the user enters their username and password. The login button should only be enabled if both a username and password have been entered. 


