/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>JS EXERCISES<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

//21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
console.log('*************EXERCISE 21***************');
console.log('');

let x = 'John'
let y = 'Doe'

console.log(x + ' <> ' + y);
console.log('');

//22) Create an object with properties such name, surname, email
console.log('*************EXERCISE 22***************');
console.log('');

let user = {
    name: 'ABC',
    surname: 'XYZ',
    email: 'abc_xyz@gmail.com'
}
console.log(user);
console.log('');

//23) Delete Email from the previously created object
console.log('*************EXERCISE 23***************');
console.log('');

delete user.email

console.log(user);
console.log('');

//24) Create an array with 10 strings in it
console.log('*************EXERCISE 24***************');
console.log('');

let stringArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

console.log(stringArray);
console.log('');

//25) Print in the console every string in the previous array
console.log('*************EXERCISE 25***************');
console.log('');

console.log(stringArray);
console.log('');

//26) Create an array with 100 random numbers in it
console.log('*************EXERCISE 26***************');
console.log('');

let randomArray = []

for(let i=0; i<100; i++){
    let random = Math.ceil(Math.random() * 100)
        randomArray.push(random)
    }  

console.log(randomArray);
console.log('');

//27) Write a function to get the MAX and the MIN from the previously created array
console.log('*************EXERCISE 27***************');
console.log('');

const maxMin = function(array, selector){
    let num = array[0]

    for(let i=0; i<array.length; i++){
        if(selector == 'Min'){
            if(array[i] < num){
                num = array[i]
            }
        }
        else if(selector == 'Max'){
            if(array[i] > num){
                num = array[i]
            }
        }
    }
    return num
}

console.log("Max value is ",  maxMin(randomArray, "Max"));
console.log("Min value is " , maxMin(randomArray, "Min"));
console.log('');

//28) Create an array of arrays, in which every array has 10 random numbers
console.log('*************EXERCISE 28***************');
console.log('');

let arrayOfArrays = []

for(let i=0; i<10; i++){
    let randomTenArray = []      
        for(let j=0; j<10; j++){   
            let randomTen = Math.ceil(Math.random() * 10)          
            randomTenArray.push(randomTen)
        } 
        arrayOfArrays.push(randomTenArray)  
    }     

console.log(arrayOfArrays);
console.log('');

//29) Create a function that gets 2 arrays and returns the longest one
console.log('*************EXERCISE 29***************');
console.log('');

const longestArray = function(array1, array2){

    let array1Length = array1.length
    let array2Length = array2.length

    if(array1Length > array2Length){
        return `${array1} is longest`
    }
    else{
        return `${array2} is longest`
    }
}

console.log(longestArray(randomArray, arrayOfArrays));
console.log('');
// longArray = [1, 2, 3, 4, 5, 6]
// shortArray = [1, 2, 3]
// console.log(longestArray(longArray, shortArray));

//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
console.log('*************EXERCISE 30***************');
console.log('');

const arraySum = function(arrayOne, arrayTwo){

    let arrayOneSum = 0
    let arrayTwoSum = 0

    for(let i=0; i<arrayOne.length; i++){
        arrayOneSum += arrayOne[i]
    }
    for(let j=0; j<arrayTwo.length; j++){
        arrayTwoSum += arrayTwo[j]
    }

    if(arrayOneSum > arrayTwoSum){
        return `Sum of ${arrayOne} = ${arrayOneSum} is greater than sum of ${arrayTwo} = ${arrayTwoSum}`
    }
    else if(arrayOneSum < arrayTwoSum){
        return `Sum of ${arrayTwo} = ${arrayTwoSum} is greater than sum of ${arrayOne} = ${arrayOneSum}`
    }
    else{
        return `Sum of ${arrayTwo} = ${arrayTwoSum} is equal to sum of ${arrayOne} = ${arrayOneSum}`
    }
}

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [5, 6, 7, 8, 9]

console.log(arraySum(arr1,arr2));
console.log('');

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>DOM<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
function darkMode(){
    let body = document.body
    body.classList.toggle('dark-mode')
}

function buttonChange(){
    let buttons = document.getElementsByTagName('button')
    let thead = document.getElementsByTagName('th')
    for(let i=0; i<buttons.length; i++){
        buttons[i].classList.toggle('dark-button')
        thead[i].classList.toggle('th-dark')
    }
}

 // 31) Get element with ID "container" from the page
console.log('*************EXERCISE 31***************');
console.log('');

  let container = document.getElementById('container')
  
  console.log(container);
  console.log('');

 // 32) Get every "td" from the page
console.log('*************EXERCISE 32***************');
console.log('');

 let tableData = document.querySelectorAll('table td')

console.log(tableData);
console.log('');

// 33) Create a cycle that prints the text inside every td of the page
console.log('*************EXERCISE 33***************');
console.log('');

for(let i=0; i<tableData.length; i++){
     console.log(tableData[i].innerText); 
}

console.log('*************     OR      ***************');

for(let i=0; i<tableData.length; i++){
    console.log(tableData[i]); 
}

console.log('');

// 34) Write a function to change the heading of the page
console.log('*************EXERCISE 34***************');
console.log('');

const headingChange = function(){
    let heading = document.querySelector('h1')
    if(heading.innerText === 'My First Benchmark Project'){
        heading.innerText = 'First Project M1'
    }
    else{
        heading.innerText = 'My First Benchmark Project'  
}
}

// let bool = true
// const headingChange = function(){
//     let heading = document.querySelector('h1')
//     if(bool === true){
//         heading.innerText = 'First Project M1'
//     }
//     else{
//         heading.innerText = 'My First Benchmark Project'
//     }
    
//     bool = !bool  
// }

console.log('');

// 35) Write a function to add an extra row to the table
console.log('*************EXERCISE 35***************');
console.log('');

const extraTableRow = function(){

    let table = document.getElementById('myTable')

    let tr = table.insertRow(1)

    let td1 = tr.insertCell(0)
    let td2 = tr.insertCell(1)
    let td3 = tr.insertCell(2)
    let td4 = tr.insertCell(3)
    let td5 = tr.insertCell(4)

    td1.innerHTML = "1";
    td2.innerHTML = "2";
    td3.innerHTML = "3";
    td4.innerHTML = "4";
    td5.innerHTML = "5";
}

// extraTableRow()

console.log('');

// 36) Write a function to add the class "test" to each row in the table
console.log('*************EXERCISE 36***************');
console.log('');

const addClasstest = function(){
    let tableRows = document.getElementsByTagName('tr')
    for(let i=0; i<tableRows.length; i++){
        tableRows[i].classList.add('test')
    }
}

// addClasstest()

console.log('');

// 37) Write a function to add a red background to every link in the page
console.log('*************EXERCISE 37***************');
console.log('');

const redBackground = function(){
    let links = document.getElementsByTagName('a')
    for(let i=0; i<links.length; i++){
            links[i].classList.toggle('red-bg')
        }
}

// let bg= true
// const redBackground = function(){
//     let links = document.getElementsByTagName('a')
//     for(let i=0; i<links.length; i++){
//         if(bg === true){
//             links[i].style.backgroundColor = "red"
//         }
//         else{
//             links[i].style.backgroundColor = "white"
//         }        
//     }
//     bg= !bg
// }

// redBackground()

console.log('');

// 38) Console log "Page loaded" when the page is correctly loaded
console.log('*************EXERCISE 38***************');
console.log('');

// window.onload = function(){
//     console.log("Page is correctly loaded");
// }

console.log('Check End Of File');

console.log('');

// 39) Write a function to add new items to a UL
console.log('*************EXERCISE 39***************');
console.log('');

const addNewItems = function(){
    //let newListItems = document.createElement('li')
    let parentUl = document.querySelectorAll('ul')
    let input = document.getElementById('li-input')
    let inputValue = input.value

   
        if(inputValue === ''){
            alert('text field empty, nothing to add in the list');
        }        
        else{
            for(let i=0; i<parentUl.length; i++){
            parentUl[i].innerHTML += `<li>${inputValue}</li>`
        }       
    }
}
//addNewItems()

console.log('');

// 40) Write a function to empty a list
console.log('*************EXERCISE 40***************');
console.log('');

const emptyList = function(){
    //let unOrderList = document.getElementsByTagName('ul')
    let list = document.getElementsByTagName('li')
    for(let i=0; i<list.length; i++){
        list[i].remove()
    }
}

//emptyList()

console.log('');

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXTRA<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
console.log('*************EXERCISE 41***************');
console.log('');


const mouseOverLink = function(){
    let links = document.getElementsByTagName('a')
    for(let i=0; i<links.length; i++){
        links[i].addEventListener('mouseover', function(e){
            document.getElementById('foot-link').innerText = e.currentTarget.href
        }) 

        links[i].addEventListener('mouseout', function(e){
            document.getElementById('foot-link').innerText = ''
        })
    }
}

console.log('');

// 42) Add a button to hide every image on the page
console.log('*************EXERCISE 42***************');
console.log('');



const hideImageButton = function(){

    let hideImgButton = document.createElement('button')
    hideImgButton.innerText = 'Hide Images'
    let bodyParent = document.querySelector('.java-button')
    hideImgButton.addEventListener('click', hideShowImage)     
    bodyParent.appendChild(hideImgButton)
}

function hideShowImage(){
    let tableImages = document.getElementsByTagName('img')
    for(let i=0; i<tableImages.length; i++){
        tableImages[i].classList.toggle('hide-image')
    }
}

// let initialImage = true
// function hideTableImg(){
//     let images = document.getElementsByTagName('img')
//     for(let i=0; i<images.length; i++){
//         if(initialImage === true){
//             images[i].style.display = 'none'
//         }
//         else{
//             images[i].style.display = 'block'

//             images[i].style.paddingLeft = '35%'           
//         }  
//     }
//     initialImage = !initialImage
// }


console.log('');

// 43) Add a button to hide and show the table from the page
console.log('*************EXERCISE 43***************');
console.log('');

const hideShowTableButton = function(){
    let hideShowButton = document.createElement('button')
    let bodyParent = document.querySelector('.java-button') 
    hideShowButton.innerText = 'Hide/Show Table'
    hideShowButton.addEventListener('click', hideShow) 
    bodyParent.appendChild(hideShowButton) 
}

let toggle = true
function hideShow(){
    let table = document.querySelectorAll('.table-div')
    for(let i=0; i<table.length;i++){
        if(toggle === true){
            table[i].style.display = 'none'
        }
        else{
            table[i].style.display = 'block'            
        }
    }
    toggle = !toggle
}

console.log('');

// 44) Write a function to sum every number inside the TD (if the content is numeric)
console.log('*************EXERCISE 44***************');
console.log('');

const sumTD = function(){
    let tD = document.getElementsByTagName('td')
    let tdSum = 0
    for(let i=0; i<tD.length; i++){
        let tdText = parseInt(tD[i].innerText)
        console.log(tdText);
        if(Number(tdText)){
            tdSum += tdText
        }          
    }
     return tdSum
}

console.log(`The sum of All td's are ${sumTD()}`);

console.log('');

// 45) Delete the last letter from the title each time the user clicks on it
console.log('*************EXERCISE 45***************');
console.log('');

const deleteLastLetter = function(){
    let title = document.querySelector('h1')
    // console.log(titleText);
    console.log(title);
    title.addEventListener('click', removeString)    
     
}

function removeString(){
    let title = document.querySelector('h1')
    titleText = title.innerText
    let newTitle = titleText.slice(0, -1)
    title.innerText = newTitle     
}
deleteLastLetter()

console.log('');

// 46) Change a single TD background color when the user clicks on it
console.log('*************EXERCISE 46***************');
console.log('');

const singleTD = function(){
    let tableData = document.getElementsByTagName('td')

    for(let i=0; i<tableData.length; i++){
        tableData[i].addEventListener('click', e => e.target.style.backgroundColor ='red')
    }
}
singleTD()
console.log('');

// 47) Add a button DELETE, on click it should delete a random TD from the page
console.log('*************EXERCISE 47***************');
console.log('');

const deleteTD = function(){
    let deleteTdButton = document.createElement('button')
    let bodyParent = document.querySelector('.java-button') 
    deleteTdButton.innerText = 'Delete 1 TD'
    deleteTdButton.addEventListener('click', deleteRand) 
    bodyParent.appendChild(deleteTdButton) 
}

function deleteRand(){
    let tableCell = document.getElementsByTagName('td')
    let randomNum = Math.floor(Math.random() * tableCell.length)
    tableCell[randomNum].style.display = 'none'
}

console.log('');

// 48) Add a pink border to a cell when the mouse is over it
console.log('*************EXERCISE 48***************');
console.log('');

const addBorder = function(){

    let tdCell = document.getElementsByTagName('td')

    for(let i=0; i<tdCell.length; i++){
        tdCell[i].addEventListener("mouseover", e => e.currentTarget.style.border ='2px solid pink'    
        )
        tdCell[i].addEventListener("mouseout", e => e.currentTarget.style.border =''
        )}
    }

addBorder()

// const removeBorder = function(){
//     let tdCell = document.getElementsByTagName('td')

//     for(let i=0; i<tdCell.length; i++){
//         tdCell[i].addEventListener("mouseout", e => e.currentTarget.style.border =''
//         )}
// }
// removeBorder()

console.log('');

// 49) Write a function to add a table with 4 rows and 3 columns programmatically
console.log('*************EXERCISE 49***************');
console.log('');

const addTable = function(){
    let parentTable = document.getElementsByClassName('new-table')[0]
    let newTable = document.createElement('newTable')
    tableBody = document.createElement('tableBody')

    for(let i=0; i<4; i++){
        let row = document.createElement('tr')
        for(let j=0; j<3; j++){
            let cell=document.createElement('td')
            let cellText = document.createTextNode('cell in row' + i + ',column ' +j)
            cell.appendChild(cellText)
            row.appendChild(cell)
        }
        tableBody.appendChild(row)
    }
    newTable.appendChild(tableBody)
    parentTable.appendChild(newTable)
    newTable.setAttribute('border', '2')
}

console.log('');

// 50) Write a function to remove the table from the page
console.log('*************EXERCISE 50***************');
console.log('');


const removeTable = function(){

   let tableRemove = document.getElementsByTagName('newTable')[0]
   parentTable = tableRemove.parentElement   
    parentTable.removeChild(tableRemove)
}

console.log('');

window.onload = function(){
    console.log("Page is correctly loaded");
    hideImageButton()
    hideShowTableButton()
    deleteTD()
    mouseOverLink()
}








