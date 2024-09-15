// 1. Change the text content of the paragraph with ID 'quote' to your favorite quote
document.getElementById("quote").textContent = "The best way to predict the future is to create it.";

// 2. Change background color of all 'info-box' class divs
const infoBoxes = document.getElementsByClassName("info-box");
for (let i = 0; i < infoBoxes.length; i++) {
    infoBoxes[i].style.backgroundColor = "#e0f7fa";  // Light cyan background
}

// 3. Update the third list item in the task list to a different text
const listItems = document.getElementsByTagName("li");
listItems[2].textContent = "Task 3 - Updated";

// 4. Append the message "Have a great day" to the footer span using querySelector
const footerSpan = document.querySelector("footer span");
footerSpan.textContent += " - Have a great day!";
