### The Golden Rule

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## Plan

![wireframes](/assets/wireframe.png)

## HTML Elements

- two sections to split main into a top and bottom half
  - how? display: grid;
- two divs to split the top half into a left and right quarter of the page
- two divs to split the top right quarter into a top and bottom half
  - why? top half will be where the current poll state is displayed
- two divs in the bottom half of the top right quarter
  - why? this is where the user will be able to click increment and decrement buttons
  - how? display: flex;
- form?
  - three inputs
    - why? one for a question and two for options
  - submit button
    - why? to create the poll
- close poll button
  - why? to move current poll to the past poll section and clear the current poll area

## Events

- user inputs poll question and options
  - event listener to store input values
- user increments or decrements options
  - event listener to increment or decrement state
  - update the DOM to reflect current state
- user clicks publish poll
  - clear current and past poll divs - append all past polls to past poll div

## Order

- write necessary HTML elements
- style HTML and validate with borders
- set state
- grab DOM elements
- declare renderPoll function
- declare displayCurrentPoll function
- declare displayAllPolls function
- declare event listeners.

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|        2 |

| Events                                                                               |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On load, see a form and empty current poll div                                             |        2 |
| On submit, add the poll options and question to the current poll div                                      |        2 |
| On clicking add or subtract, increment and decrement the correct poll votes in the current poll div|     2 |
| On clicking finish, empty the current poll div and add the current poll to the "past polls" div. All past polls should be visible in this div by looping through and calling `renderPoll` with each poll. |4|

| Functions                                                              |             |
| :----------------------------------------------------------------------------------- | ----------: |
| IMPURE: `displayCurrentPoll()` : mutates DOM to display current state of current poll | 2|
| IMPURE: `displayAllPolls()` : clears out DOM and appends to poll div using current state of past polls | 3 |
| PURE: `renderPoll(poll)` : returns DOM node | 3|

## Stretch goal ideas

- Add a dropdown to let the user select how many "options" the poll should have. For example, "What is your favorite color?" might have "red", "orange", or "green".
- Allow the user to click on and delete past polls
- Allow the user to go back and update past polls using the UX of your choice.

## HTML Setup

6 buttons

- option A add button
  - Why? 💥💥💥 Add event listener to increment the vote count for option A in the current poll
- option B add button
  - Why? 💥💥💥 Add event listener to increment the vote count for option B in the current poll
- option A subtract/undo button
  - Why? 💥💥💥 Add event listener to decrement the vote count for option A in the current poll
- option B subtract/undo buttons
  - Why? 💥💥💥 Add event listener to decrement the vote count for option B in the current poll
- create poll form
  - Why? Add 'submit' listener to (not a click listener) to the form itself!
  - three inputs (question, option 1, option 2)
    - Why? Figure out the user's question and options
    - Why? 💥💥💥 On submit, update the current poll question and options, and reflect that in the DOM
- 1 'close poll' button
  - Why?
    - 💥💥💥
    - Append the current poll to the past polls state []
    - "Update the list"
      - clear DOM of the list
      - Use a for loop to loop through all past polls, create some DOM and display each past poll in the list
    - Clear out/reset current poll state and DOM.
- current poll section
  - Why? a bunch of empty divs that we will inject state into (question, options, and vote totals)
- empty div for closed polls history/list (for appending to)
  - Why? A place to put the history
