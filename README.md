# rock-paper-scissors

## Update 1/29
Things are coming along relatively quickly. I've gotten the UI together for the RPS game, so no need to run Dev Tools to play anymore. 

## Further Development
I still need to figure out how to record the winner out of 5 games 

~~It's a relatively barebones game, and runs under the hood, so you'll need to use DevTools console.~~

I'm really proud of this rock-paper-scissors app that I've finally created! Funny thing was I was looking to organize and update some of my repositories,
until I came upon this one, which was last uploaded/created in Oct 2021. It's Fri Jan 27, 2023... almost 2 years later. My emotions at the time were fear
of the unknown, imposter syndrome, confusion, discomfort, but, *better late than never, right?*

Not giving up, continuously learning, and practicing whatever JS exercises and tutorials I could find and follow really helped to raise my familiarity and 
comfort level with JavaScript. I can't believe how far I've come, in spite of how long it took. The key point is to not give up, and to keep pushing
forward. 

## Resources that helped
* I didn't understand how to utilise WesBos' 30 days of JS, but I was able to get the hang of it. His explanations are clear, and his videos are easy to
follow along.
* Wes Bos also has excellent notes on JavaScript in general. The videos are a paid feature in that course, but the notes are free.
* freeCodeCamp has a JS curriculum with its own exercises for each topic

## Troubleshooting
* I ran into some problems with the computer/player selection displaying "undefined"
[Here's a resource that helps to clarify that](https://www.codecademy.com/forum_questions/53490c618c1ccc687f00181f)
* [Stack Overflow solution applied](https://stackoverflow.com/questions/39230557/js-rock-paper-scissor-buttons-instead-of-prompt)
* [Flexbox not centering vertically tl;dr: it's because the height property defaults to auto](https://stackoverflow.com/questions/37223622/flexbox-not-centering-content-vertically)

## Concepts Applied
* RegExp - Matches playerSelection and ignores case i.e: "rocK, RoCK, ROCK"
* if...then - the logic behind the game. If an item beats another item, there's a protocol for that.
* iterating, for...loop - Used the for loop to record the winner of each round; Winner is the one who wins the most rounds out of 5
* querySelector - selects an element from the DOM. I prefer this rather than .getElementById, because I don't have to worry about syntax. 
* addEventListener - super important for making the game interactive. The items buttons will listen for clicks. 
* Nested functions - in addition to adding event listeners, I nested a playRound()function inside of each method. 