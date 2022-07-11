
function fetchRequest () {
return fetch('http://api.tvmaze.com/search/shows')
    .then(res => res.json())
    .then(resObj => console.log(resObj)) }


const header = document.querySelector('h1')
header.addEventListener('click', e => {
    fetchRequest()
})





    //        //file:///Users/danmagers80/Development/code/phase-1/projects/index.html

//do we have to refresh page if we are doing multiple fetch requests ? 
    
//goals
//practice git push and pull 
//pitch our idea 
//have file available on git hub
//basic format set up
//js and css 
//timeline 

//ask about if this is a one-off project or if it gets used in phase 2,3, etc
//search function for all w/event listener
//like 
//delete button 


//Proposal
//Meme website that offers selection of meme templates for you to write on 
//combine memes, alter images
//user submissions to create meme 

//curated display most liked memes (or some other filter )
//like and comment on memes 




//BACKUP
//proposal 
//user curates their own tv watch list by adding titles by search
//groups of users could have a community based around particular shows 
//leave reviews or like or rate shows 
//similar shows based on tag; recommends other shows 

//3
//TV Maze TV show info 
    //http://api.tvmaze.com/search/shows?q=farscape

///search function
///liker 
///reviews and comments , five star (title )
//how to account for bad searchs?
//watch list that user input themselves 
//fetches won't make this reload 
//default to stop refresh 



//1
    //imgflip: popular memes
        //https://api.imgflip.com/get_memes

//form to add text to memes 
//likes for memes 
//users 
//delete button 
//writing stuff in memes = complicated? 
//users add their own image 
//textboxes to drag around screen 
//combining memes 






//2
//Open Food Facts 
    //'https://world.openfoodfacts.org/api/v0/product/737628064502.json'
    //possible to enter a search by bar code and it fetches info about that item
//search by bar code
//adding product that's not available 
//creating personal grocery lists 
//filter by ingredient (allergies)
//searching for something they know what they are looking for (bar code )
////a lot of functionality we are not ready for? 
//how to account for bad searchs?
//we have image urls !








//1
    //search url: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
    //Binance: 24 hr crypto data
    //'https://api2.binance.com/api/v3/ticker/24hr'
    //crypto api

//2
    //imgflip: popular memes
        //https://api.imgflip.com/get_memes

//3
    //Open Brewery DB: brewing api
    //https://api.openbrewerydb.org/breweries

//4
//Open Food Facts 
    //'https://world.openfoodfacts.org/api/v0/product/737628064502.json'
    //possible to enter a search by bar code and it fetches info about that item

//5
    //Open Libarary 'http://openlibrary.org/api/volumes/brief/isbn/9780525440987.json'
    //COORS error; question how to access 

//6
//TV Maze TV show info 
    //http://api.tvmaze.com/search/shows?q=farscape



