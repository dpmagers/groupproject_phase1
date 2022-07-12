
// function fetchRequest () {
// return 

//?_limit=20&_page=3
fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(resObj => {
 //       resObj.data.memes.forEach((memeObj) => {
              const memeArray = [
              resObj.data.memes[7],
              resObj.data.memes[8],
              resObj.data.memes[10],
              resObj.data.memes[11],
              resObj.data.memes[15],
              resObj.data.memes[20],
              resObj.data.memes[21],
              resObj.data.memes[25],
              resObj.data.memes[32],
              resObj.data.memes[33],
              resObj.data.memes[38],
              resObj.data.memes[39],
              resObj.data.memes[42],
              resObj.data.memes[45],
              resObj.data.memes[46],
              resObj.data.memes[47],
              resObj.data.memes[48],
              resObj.data.memes[49],
              resObj.data.memes[52],
              resObj.data.memes[53],
              resObj.data.memes[54],
              resObj.data.memes[55],
              resObj.data.memes[56],
              resObj.data.memes[58],
              resObj.data.memes[59],
              resObj.data.memes[61],
              resObj.data.memes[62],
              resObj.data.memes[64],
              resObj.data.memes[65],
              resObj.data.memes[66],
              resObj.data.memes[67],
              resObj.data.memes[68],
              resObj.data.memes[70],
              resObj.data.memes[71],
              resObj.data.memes[74],
              resObj.data.memes[75],
              resObj.data.memes[76],
              resObj.data.memes[77],
              resObj.data.memes[78],
              resObj.data.memes[79],
              resObj.data.memes[81],
              resObj.data.memes[82],
              resObj.data.memes[84],
              resObj.data.memes[85],
              resObj.data.memes[86],
              resObj.data.memes[87],
              resObj.data.memes[88],
              resObj.data.memes[89],
              resObj.data.memes[91],
              resObj.data.memes[94],
              resObj.data.memes[96],
              resObj.data.memes[97],
              resObj.data.memes[99]
              ]
            
        
 //             displayMemes(memeObj)
 //             console.log(resObj.data.memes)
            displayMemes(memeArray)
            console.log(memeArray)
        }) 
        
 //   } )   
        
function displayMemes(memeArray) {
    memeArray.forEach((memeObj)=>{
    const memeContainer = document.querySelector(".meme-container")
    const nameElement = document.createElement('h2')
    nameElement.textContent = memeObj.name
    const imageElement = document.createElement('img')
    imageElement.src = memeObj.url
    memeContainer.append(nameElement, imageElement)
      
    
        imageElement.addEventListener('click',(e)=>{
            console.log(`meme URL: ${memeObj.url}`)
           // const memeWorkingTitle = 
        })
    })}







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







