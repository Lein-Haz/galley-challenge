
# Github User Search (OTP app)

Deployed here: [https://shipt.zahniel.com](https://shipt.zahniel.com)

Build [instructions](BuildREADME.md)

##Problem
We need a way to quickly look up users on github and see how many followers they have.  
Then to incrementally load and view their followers list.

####Constraints: 
* Consumes web api's
* Easy of use
* Quick to load

##Solution

#####Let's make a webapp!  

A webapp will live in the same place as the data is needs to consume, the internet.
Also, in most cases people have easy access to the internet.  That makes it easy to use, well ideally it should.

#####What:
So for this project I decided on using the Angular framework, and the Angular-cli since I knew it would help things along development speed wise (I also got a late start due to driving across the country).
Angular does get some flack for being big, so that was a strike against it for being quick to load.
From my experience once Angular is loaded things run smooth, and there are things we can do to help with that initial load, service workers.

Angular is definitely what I have the most experience with, moreso 1.x than with the new one, 5 now.
Scaffolding something rapidly, then deploying it to be hosted is ridiculously simple with the Angular-cli and Firebase.

#####Why:
The project structure I used, was heavily influenced by Google and tweaked a bit from previous experiences (there are more readme's scattered throughout).
I tried to limit my importing of too many external libraries, firstly to keep build size small,
secondly for a project of this scope using too many seemed unnecessary.
Two of my commonly used libraries I neglected to import were BreezeJS and the Angular FlexLayout, an ORM and an easier way to do flexbox styling.

I did bring in the material design library because its pretty sweet looking and is inline with a lot of the apps people use on mobile, 
also cause...I mean, Bootstrap?(Okay Bootstrap, is fine and its what I've used the most, but Material is so nice)
I did a full material theming palette that mostly went to waste.  Layouts are mainly flexbox, stylesheets are in SASS, though using SCSS style.

###About the Project
Everything is at home in the src folder.  The app root is in the app directory, each module is in a self contained folder
 that contains everything relevant to it (tests, routing information, components). Within src there are also directories 
 that the app needs, some are pretty self explanatory like assets and theme.  Then we also have the core folder, this
 primarily holds our services, there is a [readme](src/core/readme.md) in `/core` that covers more details.  Same deal
 for `/environments`, also has a [readme](src/environents/readme.md)

##My Parting Thoughts
When I started this project I gave myself a 1 week time limit, overall I'm quite happy with the amount of effort I put 
in working through the problems, and also with what I created within that limited time frame.

In general, I'd say I'm not happy with the code overall, I don't hate it, but it feels like a long game ending in a tie
 I'm not really satisfied.
 I'm definitely no senior developer, so I know there are a bunch of things I'm awesome at and many more that I am not.
 One of those less awesome areas is testing, so I've been challenging myself to improve on that.  If I had more time I
 definitely would go back and improve on the tests.
  
I was glad to have the opportunity to work on this project, and actually I friggin' am going to go back and work on the tests.
 Well, I am happy that I have a good project to use for improving my testing.
 
Thanks for your time, Phil

P.S.  I can explain any of the unusual project naming choices(OTP?), but I can only do it in person.
