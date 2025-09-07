// Part 1: Variables and Conditionals

// Variable declarations
let userName = "John";
const userAge = 25;
var isStudent = true;
let favoriteFruits = ["Apple", "Banana", "Orange"];

// Conditional function
function checkAge() {
    const name = document.getElementById('nameInput').value || 'Guest';
    const age = parseInt(document.getElementById('ageInput').value) || 0;
    let message;
    
    if (age >= 18) {
        message = `Hello ${name}, you are an adult.`;
    } else if (age > 0) {
        message = `Hello ${name}, you are a minor.`;
    } else {
        message = `Please enter a valid age.`;
    }
    
    document.getElementById('ageOutput').textContent = message;
}

// Part 2: Functions

// Function declaration
function greetUser(name) {
    return `Hello, ${name}! Welcome to our site.`;
}

// Function expression
const calculateArea = function(width, height) {
    return width * height;
};

// Using the functions
function showGreeting() {
    const name = document.getElementById('greetInput').value || 'Guest';
    const greeting = greetUser(name);
    document.getElementById('greetOutput').textContent = greeting;
}

function calculateRectangleArea() {
    const width = parseFloat(document.getElementById('widthInput').value) || 0;
    const height = parseFloat(document.getElementById('heightInput').value) || 0;
    const area = calculateArea(width, height);
    document.getElementById('areaOutput').textContent = `Area: ${area}`;
}

// Part 3: Loops

// For loop example
function runForLoop() {
    const count = parseInt(document.getElementById('forLoopInput').value) || 5;
    let output = '';
    
    for (let i = 1; i <= count; i++) {
        output += `Count: ${i}\n`;
    }
    
    document.getElementById('forLoopOutput').textContent = output;
}

// While loop example
function runWhileLoop() {
    const count = parseInt(document.getElementById('whileLoopInput').value) || 5;
    let output = '';
    let i = 1;
    
    while (i <= count) {
        output += `While count: ${i}\n`;
        i++;
    }
    
    document.getElementById('whileLoopOutput').textContent = output;
}

// Part 4: DOM Interactions

// Changing text content
function changeText() {
    const element = document.getElementById('textToChange');
    element.textContent = 'The text has been changed!';
}

// Changing styles
function changeColor() {
    const element = document.getElementById('textToChange');
    const colors = ['#6e8efb', '#a777e3', '#5a7de0', '#ff6b6b', '#4ecdc4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.color = randomColor;
}

// Toggling visibility
function toggleVisibility() {
    const element = document.getElementById('textToChange');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}