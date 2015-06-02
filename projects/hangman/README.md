Text-based Games
================

It's hard to keep in mind now that graphics can be almost completely realistic but it wasn't that long ago that there were no graphics. People still had video games of course but they played them entirely with text. Rather than using your mouse, or touching things, you would have to type in commands and rather than seeing monsters you would just get a description.

![Text-based game](http://core0.staticworld.net/images/article/2013/01/colossalcaveadventure1-100023877-orig.jpg)

In fact, let's take a few minutes and play one now to get familiar with it.

Take five minutes and [play this game now](https://rawgit.com/secretGeek/console-adventure/master/console.html). Press <kbd>F12</kbd> to open up your browser's console. Follow the instructions in there (hint: type *help()* to get a list of all commands you can type). Move around, try to see how far you can get, you can always reset the game by refreshing your browser tab.

---

Fun-ish, right?

So what's going on here? Did you realize that you were just typing javascript? What is going on when you type `north()` or `speak()`? That's a part of javascript we've worked with before.

Developer Tools
===============

But what is this thing that opened when we hit <kbd>F12</kbd>? It doesn't really look like part of a web page. In fact it is not, you've just found the Developer Tools. This is something available in every web browser and on every web page. You can use it to see how the web page is built, how it behaves, and even modify the page's HTML, CSS, and Javascript. We will be using it a lot. In fact, let's open a different web page like Wikipedia and open the developer tools there (hit <kbd>F12</kbd> or <kbd>Ctrl</kbd>\+<kbd>Shift</kbd>\+<kbd>C</kbd>\)

What is important for us though, you can use the developer tools console to see any messages the developer of the web page added that a regular user won't see. This is very useful while creating web pages since you can write code that outputs messages to the console for you to understand what's going on in code that's not visible. Try writing a message to the console now. Type something like this into it

```js
console.log("My name is George and I'm", 32, "years old");
```

Hit enter and you'll see it prints that message back.

![`console.log` output](http://content.screencast.com/users/togakangaroo/folders/Jing/media/37231651-3a0e-40bb-9bd3-d6075fc6e83b/2015-04-18_1128.png)

That's not terribly useful until we combine it with an application. Let's open up our bouncing box application for example. Inside the update function add the following line

```js
console.log("the speed is currently", speed, "the position is", position);
```

Now run the bouncing box application. To be able to open the console correctly you'll have to pop the tab out of your page.

![Button to pop the tab out is to the right of the url](http://content.screencast.com/users/togakangaroo/folders/Jing/media/b4c30169-e124-4d71-aac3-41b8d765f98c/2015-04-18_1133.png)

When you're on the page you should be able to hit <kbd>F12</kbd> and see your messages! Modify the `console.log()` function call above so that you can see the current direction as well.

Let's make hangman
==================

In order to get experience using the developer tools, and writing more code let's make a simple text-based game. Rather than make an RPG let's make Hangman.

![Hangman](http://content.screencast.com/users/togakangaroo/folders/Jing/media/e5486f3b-608f-43d9-9a55-775ddda5b727/2015-04-18_1144.png)

Let's play a couple quick rounds together. *(note to teachers: write each line on the board separately)*

```
the phrase is
----- -- -------
```

Let's guess (e)

```
-e--- -- -------
```

Let's guess (n)

```
-e--- -- -------
```

Let's guess (r)

```
-e-r- -- -r--r--
```

When I write out this line, for each letter how do I know whether to write a letter, a dash, or a space? Try to come up with this *algorithm* now.

---

We should get something like this:

```
When displaying current phrase
  for each letter in the phrase
    if it has been guessed output the letter
    if it is a space output a space
    otherwise output a "-"
```

Great, we just figured out most of hangman. Now let's translate that to something the computer will understand!

Open up your website workspace and

```bash
os install hangman
```

Now open up the index.html file inside of the hangman folder, this is where you will be working today.

1 - Create a phrase
-------------------

Let's start really simple. In the Javascript Declare a variable called `secretPhrase`, store any phrase you want inside of it, and output to the console.

```js
var secretPhrase;
secretPhrase = "learn to code";
console.log("The secret phrase is", secretPhrase);
```

Save the file, run the application and view the message in the console.

2 - Display the phrase as dashes.
---------------------------------

Let's write some code to display the current phrase with dashes.

```
----- -- ----
```

*For this section we're going to add code inside the `displayCurrent` function.* Let's do a simplified version of our algorithm from above

```
for each letter in the phrase
  if it is a space output a space
  otherwise output a "-"
```

Remember how we told you that jQuery was a library that someone created to make it easy to work with web pages? We did the same thing for you to make it easy to create a hangman game. To do something with each letter you can do something like

```js
var currentPhrase = hangman.forEachCharacter(secretPhrase, function(character) {
    return "a";
});
console.log("current phrase is", currentPhrase);
```

Change the code inside of `displayCurrent` to say this and view the results in the console.

But we can do more than that! We can use the `if` keyword on each character.

```js
displayCurrent = function() {
	var currentPhrase = hangman.forEachCharacter(secretPhrase, function(character) {
	  if(character === " ") {
	    return "a";
	  } else {
	    return "b";
	  }
	});
	console.log("Current phrase is:", currentPhrase);
}
```

What will this print? Modify the code so that if it's a space it outputs a space, otherwise it outputs a dash. Try this function out by typing `displayCurrent()` into the console.

In order to see what functions are available type `hangman` into the console and hit enter. What functions are available?

3 - Implement the `guess` function
----------------------------------

Remember how in that lame little RPG we played above you could move around by typing commands like `north()`, `south()`, `east()`, and `west()` into the console? Those are just functions that someone created, just like `rect()`, `text()`, and `drawWinston()` in your [Khan Academy homework](https://www.khanacademy.org/computing/computer-programming/programming/functions/p/function-parameters). Functions are a great way for someone to interact with your program.

So let's think of the function that we want and what it should do. It would be great if the user could type into the console

```js
  guess('o');
```

and have the application display the current status of their phrase

```
  Current phrase is: l-ar- -o cod-
```

That would be cool. You notice that we already created a `guess` function for you. Let's edit it to take one parameter for the characterGuessed. Also we need to record the guess somewhere. We will do that by calling the `recordGuess` function in our `hangman` library

```js
  guess = function(characterGuessed) {
      hangman.recordGuess(characterGuessed);
  }
```

Run your application. You note that you can make guesses as we wanted but it doesn't display the current phrase status. We can do that by typing `displayCurrent()` into the console.

Of course, we *always* want that to display the current state when we guess, typing it over and over again is annoying. Modify the `guess` function so that it always calls `displayCurrent()` after calling `hangman.recordGuess`.

4 - Display the phrase with guessed letters visible
---------------------------------------------------

You'll notice that we're still not getting the current phrase displayed the way that we want - the guessed letters are not displaying instead of dashes. That's because we haven't done that yet! Let's modify `displayCurrent` to show the letters that have been guessed. To do that we can use the `hasBeenGuessed` function from our library

```js
displayCurrent = function() {
	var currentPhrase = hangman.forEachCharacter(secretPhrase, function(character) {
	  if(character === " ") {
	    return " ";
	  } else if( hangman.hasBeenGuessed(character) ){

	   	// What goes here?


	  } else {
		return "-";
	  }
	});
	console.log("Current phrase is:", currentPhrase);
}
```

Change your code to the above and modify the `// What goes here?` line appropriately.

Run your application You should be able to play hangman!

Try it out with your partner. Change the secret phrase and let your partner play.

5 - Detect when they've won
---------------------------

But what's the fun of playing a game if you can't tell when youve won? How can we figure that out?

Well, if you think about it, we have the code for that already. They win when there are no dashes in the displayed phrase, and we control whether when we output a dash with the code `return "-";`. So let's just check if the code to call the dash ever gets called

```js
displayCurrent = function() {

	var numberOfDashes = 0;

	var currentPhrase = hangman.forEachCharacter(phrase, function(character) {
	  if(character === " ") {
	    return " ";
	  } else if( hangman.hasBeenGuessed(character) ){
	   	return character;
	  } else {

		numberOfDashes = numberOfDashes + 1;

		return "-";
	  }
	});
	console.log("Current phrase is:", currentPhrase);
}
```

now you can check if the current phrase had any dashes by checking

```js
	if( numberOfDashes === 0 ) {
		//Then they won
	}
```

Change the `displayCurrent` function to add this check at the end. Output *"Congratulations, you won"* if they won. Also, call `hangman.cornify()` for a surprise!
