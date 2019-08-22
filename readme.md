# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Software Engineering Immersive Project #2: JavaDrip

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

Technologies used:
* JavaScript (ES6)
* HTML5
* CSS
* GitHub

JavaDrip - A utility app to help plan your day for transport and weather

You can find a hosted version here ----> https://github.com/Cliff-Conolly/sei-javadrip

App overview:

The premise of the app is to give you a quick glimpse of the Tube service and the weather; tips on what to wear given the temperature. In addition it also tells of you of the available Santander bikes that are closest to you, by using your postcode that you would have entered.


App Instructions:
1.	The user selects the setting for the city that they are in. At the moment there are only 5 major UK cities that the API is pulling data from:

* London
* Manchester
* Leeds
* Bristol
* Glasgow


2.	Once a location and postcode is set, the user will save it to their profile. Once they hit the 'Plan Your Day' button the following options will appear:

        * a.) What to wear?

            API: OpenWeatherMap (https://openweathermap.org/api)

            The suggestions of material and clothing is dependent on the range of temperature in increments of 10° (0° - 10 etc.) in which the temperature for the users current location was pulled from the API. The suggestions for clothing were based upon a manual input that is a if/else function. Research was done to see what materials and clothing are suited for the respective 10° temp ranges, and depending on the temperature that was pulled in from the API the function would then suggest what to wear where in the range that the current temperature fell.


        * b.) Travel Status

            API: TFL (https://api.tfl.gov.uk): Line

            The Tube schedule is consumed from the TFL API, with realtime updates which show the service status.


        * c.) Santander Bikes

            API: TFL (https://api.tfl.gov.uk): BikePoint

            The Santander Bike availability is consumed from the TFL API, with the nearest station to your postcode and the amount of bikes available.


Process:

The initial concept was to make a utility app that one could use while sitting having a coffee in the morning. It would enable you to see what the transport status was for the Tube line and the Santander bikes. In addition, it would suggest what to wear given the current weather.

After carefully laying out the purpose for the app, we had to break each function that is required down so that we could figure out what components we would need. Canva.com was used to draw a mock up of how it would look, and where the functioning buttons would be placed. Once we got the fundamentals down, we started to code and structure the main body.

We set about first getting the data from the TFL API for the line service, and only when we had finished the MVP (minimum viable product) did we decide to add the data for the Santander BikePoint's which was relatively easy. The suggestions for the clothing was researched online and was basically seeded.

Once we had all the API data being consumed, we then proceeded to design with straight CSS and adding a colour scheme that was cheerful given that it would be used in the morning when users weren't at their cheeriest.

Challenges:

The biggest challenge was initially getting the data from the TFL API, but once that was figured out it was mostly the time constraint that we were up against. I must say that this was the smoothest project that I worked on during the course, as we thought out methodically what the purpose was. Therefore, it was just a matter of getting the code to function to output what was needed.

Wins:

Having the app function as conceived was very rewarding. It was out first foray into consuming an API, and whereby initially the learning curve was slow, we eventually were able to pull the data that we required.

Future features:

Future iterations could include a new design scheme and maybe the use of GPS location for mobile users.
