### Core Module

We are going to fill this directory with anything that will only be 
imported during app load.  So primarily services and perhaps some components.

So this structure seems like overkill for the scale of this app, yep I totally agree.
Rather than cluttering up the app root with services and stuff it's not a bad idea to
do simple things that will allow easier scaling.

I can't take ~~all~~ any of the credit for this design decision, some other folks had the bright idea:
[Reading is good](https://angular.io/guide/ngmodule#the-core-module "Big G")
