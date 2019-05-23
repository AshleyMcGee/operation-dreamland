# Operation Dreamland


## The Truth Is Out There

Originally Operation Dreamland was a class assignment. However, it was not long before I saw the larger potential for this site. Nothing brings me more joy than undermining the populast agenda while honoring an aged fandom from the '90s. 

It was through the front-end design that I discovered I could connect the contents of the meager database with a long-lost love of *The X: Files*. I began developing a design and implementation that would capture the essence of the show while having little to do with its trademarked appearance or theme. 

What follows is my process for development and my plans for the future of Operation Dreamland


### The Name

Dreamland is not a science-fictional inspiration. From my high school years of preoccupation with extraterrestrial life, I remembered that one of Area 51's many code names was Dreamland. Area 51, a real government airfield on the edge of the dry bed Groom Lake in the Nevada badlands. Nothing more comfortably defines the culture of conspiracy theorists looking to validate their claims than a tool named for one of the country's most scrutinized, controversial, and confusing landmarks.


### The Design

I developed an Illuminati-esq logo based on the eye atop the pyramid on the back of the $1 bill. The colors came together by eye, but I did save the hexadecimal code for consistency. I personally designed the graphics for the site. 

The background is an old paper texture on a black and flourescent green gradient. A satelite view of Area 51 is superimposed over the whole. The font is a stock font with Windows that I had made into a font face so that I could use it online. 

![front-end1](https://github.com/AshleyMcGee/operation-dreamland/blob/master/front-end1.png "Screen capture of the search form on Operation Dreamland.")

I find that designing anything for web without first designing a PSD takes longer and looks shoddier than having first laid out the elements the way I want. After I had the final PSDs in place, I used a combination of static HTML and Bootstrap elements to create the web page. Design from start to finish took a cumulative ten hours.


### Situational Report

Operation Dreamland started out as an experimental front-end table visualization with JavaScript, a simple searchable array of JSON objects, a sampling of the world's collective UFO sightings. It is still very much in this format. Currently, the "database" is searchable by date only. However, my conditional statement converts the Bootstrap date-time object into miliseconds from the epoch using the Javascript Date object. Ideally, one would simply compare a string object to the value of the key named "date-time" in the JSON object, which was also a string. However, that object should not have been a string. It should have been a definitive date-time object so that when it converted to miliseconds, it would not be six hours behind the object coming from the Bootstrap date input field. 

It took some fancy footwork, but myself and my instructor were able to make the conversion and add six hours worth of miliseconds to the string-cum-date-object so that the array could be searched by actual date rather than by a string that one hopes a user can match exactly to the one in the JSON. 

Here is the current status:

  * The front-end form is only searchable by date at the moment. 
  * The form on the "Report Sighting" page is not set up yet. 
  * So far, the page is only good for full size medium and large desktop or laptop screens. 
  * The site is currently hosted a github page. 
  * I was so confident in the success of the site, I bought the domain name for www.operationdreamland.com
 
However...

### I Want to Believe: The Future of Operation Dreamland

Though it seemed this project would mearly be searchable array of JSONs,it soon became clear that in order to account for additional sightings, a front-end collection of objects would not be sustainable. The database would need to be moved to the back end. Also, the position of the fields need to be switched to be more sensical to users. 

In addition to user experience, here is the future plan for Operation Dreamland

  * Set up a flask app in python to power a dynamic web template to be hosted on a raspberry py server at my comandeered domain name.
  * Move the data from the JSON format to a real SQLite database to be hosted on the server, which can be queried from and updated to.
  * Create GET and POST protocols within the flask app to request data from the SQLite database with the search form and update the database with new data from the sightings form.
  * Instead of attaching a WordPress site as a blog to the page, I am connecting the page to a Volusion eCommerce site, where I will host a blog promoting an initiative to support retired and homeless veterans who require surgeries and treatments the VA hospital will not cover due to varying circumstances. Not only will the Volusion site be set up with a secure membership/donations functionality, I will only have to buy one SSL certificate for the main pages, as the merchant page will have a rolling SSL encryption that changes every six months (I should know. I used to install them for Volusion). My users will provide me with no personally identifiable information for the search or adding new sightings while they can trust their payment information can be secure through Volusion, whom I personally trust as a partner.
  
I believe that the Government (with a capital G) is fundamentally failing some Americans. I believe honesty and transparency are no longer important both to the people representing our best interests nor to some of their constituents. I believe that patriotism has been replaced with nationalism, and I believe some of the people suffering most from this dillusion are the people who volunteer their bodies and lives to preserve freedom at home and abroad. 

I want to believe that we can do our part to re-shine the light on the truth, both at home and throughout the cosmos. I want to believe that if our Government cannot support the people it uses to further the causes of freedom once they return from campaigning, then it is our job as fellow citizens to provide what support we can. While we search for proof that we are not alone in the universe, we can prove that our veterans are not alone here on earth. 

## Conclusion

Operation Dreamland started out as a simple class assignment, but it has grown to be immeasurably important to me both as a project to prove my full-stack development skills and to decrease the sum of human suffering in the United States. I look forward to finishing this project and building many more like it. 