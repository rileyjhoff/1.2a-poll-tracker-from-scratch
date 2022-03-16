// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

const currentPollEl = document.querySelector('.current-poll-container');
const pastPollEl = document.querySelector('.past-polls-container');

const pollName = document.querySelector('#poll-question-name');
const optionOneName = document.querySelector('#option-one-name');
const optionTwoName = document.querySelector('#option-two-name');

const submitButton = document.querySelector('.form-button');
const optionOneAddButton = document.querySelector('#option-one-add');
const optionOneSubtractButton = document.querySelector('#option-one-subtract');
const optionTwoAddButton = document.querySelector('#option-two-add');
const optionTwoSubtractButton = document.querySelector('#option-two-subtract');
const publishButton = document.querySelector('#publish-poll');

const pollQuestionLabel = document.querySelector('#poll-question-label');
const optionOneLabel = document.querySelector('#option-one-label');
const optionTwoLabel = document.querySelector('#option-two-label');

console.log(currentPollEl, pastPollEl, pollName, optionOneName, optionTwoName, submitButton, optionOneAddButton);
console.log(optionTwoAddButton, optionOneSubtractButton, optionTwoSubtractButton, publishButton, pollQuestionLabel, optionOneLabel, optionTwoLabel);

// let state
let pollQuestion = '';
let option1Name = '';
let option2Name = '';
let option1Votes = 0;
let option2Votes = 0;
let pastPolls = [];

// set event listeners
    // get user input
    // use user input to update state
    // update DOM to reflect the new state

submitButton.addEventListener('submit', () => {

});

optionOneAddButton.addEventListener('click', () => {
    option1Votes++;

});

optionOneSubtractButton.addEventListener('click', () => {
    option1Votes--;

});

optionTwoAddButton.addEventListener('click', () => {
    option2Votes++;

});

optionTwoSubtractButton.addEventListener('click', () => {
    option2Votes--;

});

publishButton.addEventListener('click', () => {

});

function displayCurrentPoll() {

}

function displayAllPolls() {

}