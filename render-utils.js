export function renderPoll(pollQuestion, option1Name, option2Name, option1Votes, option2Votes) {
    const currentPollDiv = document.createElement('div');
    const currentPollName = document.createElement('h3');
    const currentPollOptionOne = document.createElement('p');
    const currentPollOptionTwo = document.createElement('p');

    currentPollDiv.classList.add('poll');

    currentPollName.textContent = pollQuestion;
    currentPollOptionOne.textContent = `${option1Name}: ${option1Votes}`;
    currentPollOptionTwo.textContent = `${option2Name}: ${option2Votes}`;

    currentPollDiv.append(currentPollName, currentPollOptionOne, currentPollOptionTwo);

    return currentPollDiv;
}