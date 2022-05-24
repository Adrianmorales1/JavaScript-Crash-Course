//this is for DOM starts at 1:12:29
// alert('this is an alert!') annoying alert but that is how you do that
window //an object that is the webpage.. I believe

//Single element
    console.log(document.getElementById('my-form'))//this gets every element by ID 
    form = document.getElementById('my-form')
    console.log(form)
    console.log(document.querySelector('.container'))//selecting the first thing on html, use case can do more than just an id

//Mutliple element

    console.log(document.querySelectorAll('.item')) //selects all items. can be a class/id/html or anything and creates a nodelist. an object that has all three 
    console.log(document.getElementsByClassName('item')) // this gets them all but in an HTML Collection
    console.log(document.getElementsByTagName('li')) // this gets them all but in an HTML Collection

//

const items = document.querySelectorAll('.item')

items.forEach((item) => console.log(item))

const ul = document.querySelector('.items');

//ul.remove(); removes items 
//ul.lastElementChild.remove(); removes last child
ul.firstElementChild.textContent = 'hello'; // changes text

ul.children[1].innerText = 'goodbye'//children is a way to get into the array of ul and grab any .item you want innerText we already know about from Coding Dojo

ul.lastElementChild.innerHTML = '<h6>heyyyyy<h6>';//using innerHTML you can change the actual HTML and also what is in it. it basically creates its own html line on JS


const btn = document.querySelector('.btn')
btn.style.background = 'red' // to be able to manipulate things in functions something like you were doing with a lot of your homework


const yes = document.querySelector('#yessir') //messed this up it is suppose to be bts

yes.addEventListener('onclick', (e) => {
    e.preventDefault(); console.log('click')
    console.log(e.target.className)
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello<h1>'
})

//creating a form script

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSumbit)

function onSumbit(e) {
    e.preventDefault();

    if(nameInput.value == '' || emailInput.value == '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li')//create element is something you do to create an element on the html
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); //this created what was in the li the actual text
        console.log(li.innerText) //printed to make sure everything worked 
        userList.appendChild(li);//adds li to the ul on #users

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
    console.log(nameInput.value) // get name not just HTML
}