# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: JavaDrip

Project 2 by:  Cliff Conolly & Tom Tidswell

General Assembly Project 2:  App that consumes a public API

Goal:

* **Consume a public API**
* **Have several components**
* **The app can include a router**
* **Include wireframes**
* Have **semantically clean HTML**
* **Be deployed online**


Timeframe: 2 days

Technologies used
* JavaScript (ES6)
* HTML5
* CSS
* GitHub

JavaDrip - A utility app to help plan your day for transport and weather

You can find a hosted version here ----> https://github.com/Cliff-Conolly/sei-javadrip

App overview

The premise of the app is to give you a quick glimpse of the Tube service and the weather; tips on what to wear given the temperature. In addition it also tells of you of the available Santander bikes that are closest to you, by using your postcode that you would have entered.


App Instructions:
1.	The user selects the setting for the city that they are in. At the moment there are only 5 major UK cities that the API is pulling data from:

* London
* Manchester
* Leeds
* Bristol
* Glasgow


2.	Once a location is set, the user will hit the 'Plan Your Day' button and the following options will appear:

        * a.) What to wear?

            API: OpenWeatherMap (https://openweathermap.org/api)

            The suggestions of material and clothing is dependent on the range of temperature in increments of 10° (0° - 10 etc.) in which the temperature for the users current location was pulled from the API. The suggestions for clothing were based upon a manual input that is a if/else function. Research was done to see what materials and clothing are suited for the respective 10° temp ranges, and depending on the temperature that was pulled in from the API the function would then suggest what to wear where in the range that the current temperature fell.


        * b.) Travel Status

            API: TFL (https://api.tfl.gov.uk)

            The Tube schedule is consumed from the TFL API, with realtime updates which show the service status.


        * c.) Santander Bikes



3. As you maneuver left to right, press the space-bar to fire your missiles to kill the ships.



4. When you have a kill on the enemy ship you will see and hear it explode and 10pts will be added to your score.



5. When the enemy kills you, you will also explode and one of your lives will be deducted and you will immediately receive a new ship.



5. When all of your ships have been hit, the game will be over.



Process
The starting point for this game was creating the basic grid layout on which the dogfight could happen between the player and enemies and where they could move. This was created by a list of 'div's in the HTML. Each cell within the grid was an individual element. These cells are nestled within a container. The X-Wing and Tie-Fighters along with the other images for the blasters and explosions were images that I found on a website that uses photorealistic images that you can rotate in any direction to get the angle you want. Therefore, I aligned the fighters at an angle to make it appear more 3 dimensional and realistic as they face off. Original sound files from the movie for the respective X-Wing and Tie-Fighters were also used to simulate when they fired and also when they exploded from a missile.

Functions for every aspect included the firing and movement of the missiles by both the player and the enemy, score keeping, lives and game over. The biggest function (and most difficult) was the movement of the enemies as they came down closer to the player, dropping one level and firing at the same time.

The most satisfying moment was when I reverse engineered the player firing function and used it for the enemies to go in the opposite direction. Upon testing it, there were only two lines of code that were needed to fix the interval at which the enemy fired, and it ‘worked’! I was amazed because it was a surgical operation that took 1 ½ hours to do and that was the only bug!

Challenges
The biggest challenge was trying to get multiple ships. It was only in hindsight that I should have used classes to accomplish this. The code I wrote for my first enemy ship could be duplicated, and I did it for a second ship but the code got buggier when I tried a third.
Wins
Being able to reverse engineer the firing mechanism for the player ship to the enemy ship so that the direction was reversed without major changes was a high point. Overall I really enjoyed the project and it became a passion project once I started to use the photorealistic images and original sounds.


Future features

Future iterations will include more enemy ships, a Star Destroyer as the ‘mothership’. Also now that I can maneuver the photorealistic images in different directions, I will have an effect whereby every random shot that the makes on the Tie-Fighters, it will ‘appear’ to spin out of control towards the X-Wing Fighter to increase the difficulty level whereby the player has another object to escape from.
