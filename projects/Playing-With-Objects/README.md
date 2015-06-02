<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.


Playing With Objects
================
Let's make a website that lets us add people to a page with some information.
It should look like the following mockup:

![Text-based game](http://i.imgur.com/qjLIY4F.png)

We've provided you with the html, you just need to add some Javascript to make
everything work smoothly.

The idea is that the user will type in some information in the input boxes and
click the `Add` button. Then the information that they input will be transformed
into a sentence like: "Ben loves the color yellow." Since each person has multiple
pieces of information about themselves,
we will group them into a `person` object.  We will do this in the following steps:

1. 
Make a function that returns a `person` object which contains the information
entered in the input boxes. 
2. 
Make a function that takes a `person` object and adds a sentence to the list.
3. 
Make a function that clears the input boxes so that another person can be entered.
4. 
Make a function that runs when the `Add` button is clicked and uses the other
functions to add a `person` to the list and clear the inputs.

Open up your website workspace and

```bash
os install playing-with-objects
```

Now open up the index.html file inside of the playing-with-objects folder,
this is where you will be working today.

1 - Get a Person
-------------------
Fill out the `getPerson` function.

You can access the text that is typed into
the `name` input box with:

```js
name.val()
```

Try it out with `console.log()`.

Remember, this function should return an object that will have a `name` property
and a `color` property.

2a - Strings
-------------------
In step 2b you will need to build a string from an object.  Let's practice this
in the console.

If I have a `house` object that looks as follows:
```js
{
    "address": "123 Fake St.",
    "age": 43,
    "rooms": 4
}
```
if I want to make the string `"My house is 43 years old and is at 123 Fake St.`"
then I need code that looks like:
```js
var string = "My house is " + house.age + " years old and is at " + house.address;
```
notice that the `+` operator is used to join strings together.

In the browser console, use this object to make the string:
`"My house has 4 rooms."`

2b - Display a Person
-------------------
Fill out the `displayPersonInfo` function.  After we turn the inputs into a `person`
object we now need to turn that into a string and put it on the page.

To add a line of HTML from the Javascript you can use the following code:
```js
peopleList.append(
    $("<p>").text("Crazy String")
);
```
This will add a 
```html
<p>Crazy String</p>
```
to the page every time it is called.  You will need to change "Crazy String" to
use information from the `person` object.

3 - Clear the inputs
-------------------
Fill out the `clearInputs` function. Once we have all the information that we need
from the inputs we need to clear them so that we can add another person to our
list.

To clear the `name` input box add: 
```js
name.val("")
```
to the function.  Also do this for the color input box

4 - Put it all Together
-------------------
We need to use the above functions in response to the user clicking the `Add`
button. This is what we call an event handler and it looks like:
```js
$("[id=add]").click(function(){

})
```

This function gets called when the user clicks on `Add` so we need to

1. Get the person using `getPerson`
2. Pass the `person` object into `displayPersonInfo`
3. Clear the inputs with `clearInputs`

5 - Customize it!
-------------------
Now make it yours: Add a new input to the html and try to add it through the
whole pipeline we created.