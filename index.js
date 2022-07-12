
// function fetchRequest () {
// return 

//?_limit=20&_page=3
fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(resObj => {
 //       resObj.data.memes.forEach((memeObj) => {
              const memeArray = [resObj.data.memes[7],
              resObj.data.memes[8],
              resObj.data.memes[10],
              resObj.data.memes[11],
              
              ]
 //             displayMemes(memeObj)
 //             console.log(resObj.data.memes)
            displayMemes(memeArray)
            console.log(memeArray)
        }) 
        
 //   } )   
        
function displayMemes(memeArray) {
    const memeContainer = document.querySelector(".meme-container")
    const nameElement = document.createElement('h2')
    nameElement.textContent = memeArray.name
    const imageElement = document.createElement('img')
    imageElement.src = memeArray.url
    memeContainer.append(nameElement, imageElement)
    
    
}

    //const memeArray = resObj.data.memes



//resObj is passed into an arrow function 
//argument is res.Obj.data.meme
//do a forEach method on the resObj.data.meme array 
//pass this memeArray into the meme container (either in a seperate function that is invoked in the fetch
//or with the "display memes" functionality/function living in the fetch)

//JOSH'S SOLUTION FOR FETCH 
// fetch("https://www.dnd5eapi.co/api/monsters")
// .then(response => response.json())
// .then(monsters => displayMonsters(monsters))

// function displayMonsters(monsters){
//   monsters.results.forEach(array => newMonsters(array))

// }
// function newMonsters(array){
//     console.log("hello")



// const memeContainer = document.getElementsByClassName("meme-container")
// const nameElement = document.createElement('h2')
// const imageElement = document.createElement('img')
// memeContainer.append(nameElement, imageElement)    
        
//         = memeArray)
        
//      //   (resObj.data.memes.forEach(displayMemes)))


// //console.log()
//     }
//     console.log(memeArray)

//drop down menu to display names to select 
//click to submit form 

    //h2 = name 
    //url = image 

    // box_count: 2
    // height: 1200
    // id: "181913649"
    // name: "Drake Hotline Bling"
    // url: "https://i.imgflip.com/30b1gx.jpg"
    // width: 1200


       // console.log(resObj.data.memes))
    
    
    // const fruits = ["apple", "orange", "cherry"];
    // fruits.forEach(myFunction);
    
    //array = resObj.data.memes

    //     {
    //     displayMemes(resObj) 

    //     console.log(resObj.data.memes)

    // })
    
// displayMemes() {

// }


// const header = document.querySelector('h1')
// header.addEventListener('click', e => {
//     fetchRequest()
// })







