/*Name this external file gallery.js*/

let display = document.querySelector("#image");
let previousText = display.textContent;


function addTabIndex() {
    console.log("Event Triggered: Adding Tabindex to images");
    let images = document.getElementsByTagName("img");
    for(let image of images) {
        image.setAttribute("tabindex", 0);
    }

    console.log("Event Successful!");
}

function upDate(previewPic){
    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  display.style.backgroundImage = `url(${previewPic.src})`;
  display.textContent = previewPic.alt;
  
	}

function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    display.style.backgroundImage = null;
    display.textContent = previousText;
}