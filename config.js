/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-GB", // or "eng-US"
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric", // for celsius units are "metric", for Fahrenheit units are "imperial"

	modules: [
		/*{
			module: "alert", //Activate this module if you want to review of any error alerts or need to update software
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},*/
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Davos, CH",
				locationID: "2661039", //or 2643743 for London, 5128581 for NYC, or 5364275 for Laguna Beach, 3028808 for Cannes, 2661039 for Davos 
				//ID from https://openweathermap.org/find
				//Find the city by name and country, then copy the code on the browser address
				apiKey: "get_your_own_key"
			}
		},
		/*{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR_OPENWEATHER_API_KEY"
			}
		},*/
		{
			module: "calendar",
			header: "</br></br></br></br>UP NEXT",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/4e406066c53614563fbf3d39a49ccd6f8a6e33816f0014106f43503713daa9d5%40group.calendar.google.com/public/basic.ics" //EMEA Mirror calendar, or for US Mirror calendar use "https://calendar.google.com/calendar/ical/7fab5c51af8c4a3b0ffe1b48cc8578c58323db20e48e451fc9cb7f2677a39310%40group.calendar.google.com/public/basic.ics"
						
					}
				]
			}
		},
		{
			module: "compliments",
			//header: "#JournalHouseDavos</br></br></br></br>",
			//position: "lower_third",
			position: "bottom_bar"
		},

		{
			module: "newsfeed",
			header: "WSJ NEWS</br></br>",
			//position: "bottom_bar",
			position: "lower_third",
			config: {
				feeds: [
					/*{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},*/
					{
						title: "WORLD NEWS",
						url: "https://feeds.a.dj.com/rss/RSSWorldNews.xml" //or for Technology News "https://feeds.a.dj.com/rss/RSSWSJD.xml"
					},
					/*{
						title: "WORLD NEWS",
						url: "https://feeds.a.dj.com/rss/RSSWorldNews.xml"
					}*/
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
