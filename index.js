
//FETCH REQUEST FOR MEMES
fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(resObj => {

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
            
        
            displayMemes(memeArray)
            
        }) 
        
 //  RENDERING THE DISPLAY OF MEMES 
 const memeTitle = document.querySelector("div#meme-tank h3")      
 const memeImg =  document.querySelector("div#meme-tank img")

function displayMemes(memeArray) {
    memeArray.forEach((memeObj)=>{
    const memeContainer = document.querySelector(".meme-container")
    const nameElement = document.createElement('h2')
    nameElement.textContent = memeObj.name
    const imageElement = document.createElement('img')
    imageElement.src = memeObj.url
    memeContainer.append(nameElement, imageElement)
      

// drop down meme population
        const dropdownItem = document.getElementById('myDropdown')
        const newItem = document.createElement('a')
            newItem.textContent = memeObj.name
            dropdownItem.append(newItem)

        newItem.addEventListener('click', (e) => {
            memeTitle.textContent = memeObj.name
            memeImg.src = memeObj.url
            topOutput.textContent = ""
            bottomOutput.textContent = ""
        })

// click listener for meme display
        imageElement.addEventListener('click',()=>{
            
            memeTitle.innerHTML = memeObj.name 
            memeImg.src = memeObj.url
            topOutput.textContent = ""
            bottomOutput.textContent = ""
    
        })
    })}
const topOutput = document.querySelector('#top-text-output')
const bottomOutput = document.querySelector('#bottom-text-output')
//FORM PUTS THE TEXT ON THE MEME
    const form  = document.getElementById('meme-generator')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const topText = e.target['top-text'].value
        const bottomText = e.target['bottom-text'].value
            topOutput.textContent = topText
            bottomOutput.textContent = bottomText
        
     form.reset()
     

})

    let j = 0
//BUTTON THAT PUTS FINISHED IN THE CONTAINER 
    const btn = document.getElementById('btn') 
    btn.addEventListener("click",(e)=>{
        const topOutput = document.getElementById('top-text-output')
        const bottomOutput = document.getElementById('bottom-text-output')
    
    

    
    const newMemeArray = []
        newMemeArray[0] = memeTitle.innerHTML
        newMemeArray[1] = memeImg.src
        newMemeArray[2] = topOutput.textContent
        newMemeArray[3] = bottomOutput.textContent

    const newMemeContainer = document.getElementById('created-and-favorited-memes')
    const newMemeDiv = document.createElement('div')
        newMemeDiv.id =`${j}`
    
    const newMemeTitle = document.createElement('h2')
        newMemeTitle.innerHTML = newMemeArray[0]

    const newMemeImg = document.createElement('img')
        newMemeImg.src = newMemeArray[1]

    const newMemeTopOutput = document.createElement('p')
            newMemeTopOutput.className = "created-meme-top-text"
        newMemeTopOutput.textContent = newMemeArray[2]

    const newMemeBottomOutput = document.createElement('p')
            newMemeBottomOutput.className = "created-meme-bottom-text"
        newMemeBottomOutput.textContent = newMemeArray[3]

    const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.id = `delete ${j}`
        deleteBtn.className = 'delete'

    newMemeContainer.append(newMemeDiv)
        newMemeDiv.append(newMemeTitle, newMemeImg, newMemeTopOutput, newMemeBottomOutput, deleteBtn)
    
    deleteBtn.addEventListener('click',(e)=>{
        newMemeDiv.remove()
    })

    return j = j + 1
})   

   