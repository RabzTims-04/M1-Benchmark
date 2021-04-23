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

 // 31) Get element with ID "container" from the page

  let container = document.getElementById('container')

 // 32) Get every "td" from the page

 let tableData = document.querySelectorAll('.table-borders tr td')

// 33) Create a cycle that prints the text inside every td of the page


for(let i=0; i<tableData.length; i++){
     console.log(tableData[i]); 
}

// 34) Write a function to change the heading of the page

const headingChange = function(){
    let heading = document.querySelector('h1')
    heading.innerText = 'First Project M1'
}

// 35) Write a function to add an extra row to the table

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

// 36) Write a function to add the class "test" to each row in the table

const addClasstest = function(){
    let tableRows = document.getElementsByTagName('tr')
    for(let i=0; i<tableRows.length; i++){
        tableRows[i].classList.add('test')
    }
}

// addClasstest()

// 37) Write a function to add a red background to every link in the page

const redBackground = function(){
    let links = document.getElementsByTagName('a')
    for(let i=0; i<links.length; i++){
        links[i].style.backgroundColor = "red"
    }
}

// redBackground()

// 38) Console log "Page loaded" when the page is correctly loaded

window.onload = function(){
    console.log("Page is correctly loaded");
}

// 39) Write a function to add new items to a UL

const addNewItems = function(){
    //let newListItems = document.createElement('li')
    let parentUl = document.querySelectorAll('ul')

    for(let i=0; i<parentUl.length; i++){
        parentUl[i].innerHTML += `<li>${''}</li>`
    }
}

//addNewItems()

// 40) Write a function to empty a list

const emptyList = function(){
    //let unOrderList = document.getElementsByTagName('ul')
    let list = document.getElementsByTagName('li')
    for(let i=0; i<list.length; i++){
        list[i].remove()
    }
}

//emptyList()

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>EXTRA<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL

// //  const mouseOver = function(event){
//     let url = document.getElementsByTagName('a')
//     let url2 = document.getElementsByTagName('a')

//     for(let i=0; i<url.length; i++){
//         url[i].addEventListener('mouseover', function(event){
//             let link = url[i].getAttribute("href")
//             let urlShow = document.createElement('span')
//             urlShow.innerText = link
//             url2[i].parentElement.insertBefore(urlShow, url[i])
//             event.target.classList.add('url-mouse')

//         },
//         false
//         )
//     }



// 42) Add a button to hide every image on the page

const hideButton = function(){

    let hideImgButton = document.createElement('button')
    hideImgButton.innerText = 'Hide Images'
    hideImgButton.addEventListener('click', function(){
        let images = document.getElementsByTagName('img')
        for(let i=0; i<images.length; i++){
            images[i].style.display = 'none'
        }
    })
    let bodyParent = document.querySelector('body')
    bodyParent.appendChild(hideImgButton)
}


// 43) Add a button to hide and show the table from the page

const hideShowTableButton = function(){
    
    let hideShowButton = document.createElement('button')
    
    hideShowButton.innerText = 'Hide/Show Table' 
    let toggle = false  
    hideShowButton.addEventListener('click', function(){
        let table = document.getElementsByTagName('table')
        
        for(let i=0; i<table.length; i++){           
            if(toggle === true){
                table[i].style.display = 'none'
            }
            else{
                table[i].style.display = 'block'
            }                       
        }              
    })
    toggle = !toggle
    let bodyParent = document.querySelector('body')  
    bodyParent.appendChild(hideShowButton)     
}

// 44) Write a function to sum every number inside the TD (if the content is numeric)

const sumTD = function(){
    let tD = document.getElementsByTagName('td')
    let tdSum = 0
    for(let i=0; i<tD.length; i++){
        let tdText = tD[i].innerText
        if(tdText !== NaN){
            tdSum += tdText
        }
    }
    return tdSum
}

// 45) Delete the last letter from the title each time the user clicks on it

const deleteLastLetter = function(){
    let title = document.querySelector('h1')
    titleText = title.innerText
    title.addEventListener('mouseover', function(){
      let newString = titleText.substring(0, titleText.length - 1)       
      return newString 
    })
     
}


// 46) Change a single TD background color when the user clicks on it



// 47) Add a button DELETE, on click it should delete a random TD from the page
// 48) Add a pink border to a cell when the mouse is over it

// const addBorder = function(){

//     let tdCell = document.querySelectorAll('tr td')

//     for(let i=0; i<tdCell.length; i++){
//         td[i].addEventListener('mouseover', function(event){
//             if(event.target.classList('.td'))
//         })
//     }

// }
// 49) Write a function to add a table with 4 rows and 3 columns programmatically
// 50) Write a function to remove the table from the page

window.onload = function(){
    hideButton()
    hideShowTableButton()
    deleteLastLetter()
}








