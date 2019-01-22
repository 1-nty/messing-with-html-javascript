//choose a selector with this then change it
document.querySelector('h1').innerHTML = 'Most popular TV show searches in 2016';
//or look up by id attribute
document.getElementById("fourth").innerHTML = "Fourth element"


//For example, the following code selects the first element with a class of blue and assigns blue as the background-color:
let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';

//style the background-color of the body in the blog-post document to match the color e.g. css changes
document.body.style.backgroundColor = "#201F2E";


//The following code creates a new paragraph element, adds text to the new element's innerHTML, and appends it to the body of the document:
let paragraph = document.createElement('p');
paragraph.innerHTML = 'The text inside paragraph';
document.body.appendChild(paragraph);
