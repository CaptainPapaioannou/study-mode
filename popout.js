// QUOTE PART

//Stored quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "The secret of getting ahead is getting started. - Mark Twain",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The harder I work, the luckier I get. - Samuel Goldwyn",
  "Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing. - William A. Ward",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The computer was born to solve problems that did not exist before. - Bill Gates",
  "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
  "The art of debugging is figuring out what you really told your program to do rather than what you thought you told it to do. - Andrew Singer",
  "In software, the sky is the limit in terms of what you can create. - John Ousterhout",
  "The best way to predict the future is to invent it. - Alan Kay"
];

// Function to choose a random quote
function chooseRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to update the h3 element with a new quote
function updateQuote() {
  const h3Element = document.querySelector('h3.quote-placeholder');
  h3Element.textContent = chooseRandomQuote();
}

//I put this for the quote to change everytime for demonstration purposes
updateQuote();

// Check if a day has passed since the last quote update
function isDayPassed(lastTimestamp) {
  const currentTimestamp = new Date().setHours(0, 0, 0, 0);
  return currentTimestamp > lastTimestamp;
}

//If a day has passed reset the timer and update the quote
function main() {
  const lastTimestamp = localStorage.getItem('quoteTimestamp');

  if (!lastTimestamp || isDayPassed(Number(lastTimestamp))) {
    updateQuote();
    localStorage.setItem('quoteTimestamp', new Date().setHours(0, 0, 0, 0).toString());
  }
}

window.addEventListener('DOMContentLoaded', main);



//MUSIC PART
document.querySelector('button.play').addEventListener('click', function(){
    var selTrack = document.querySelector('select').value;

    chrome.runtime.sendMessage({name: "playTrack", track: selTrack});
});

document.querySelector('button.pause').addEventListener('click', function(){

    chrome.runtime.sendMessage({name: "pauseTrack"});
});

//TO DO LIST PART
document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  // Load tasks from local storage on extension start
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const task = {
        text: taskText,
        completed: false,
      };
      tasks.push(task);
      saveTasks();
      renderTasks();
      taskInput.value = "";
    }
  }

  function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }

//function that generates the html of a new task
  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => toggleTaskStatus(index));

      const text = document.createElement("span");
      text.textContent = task.text;
      if (task.completed) {
        listItem.classList.add("completed");
      }

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "🗑️";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", () => deleteTask(index));

      listItem.appendChild(checkbox);
      listItem.appendChild(text);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
    });
  }

//function for add task button
  addTaskButton.addEventListener("click", addTask);
  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  renderTasks();
});
