const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');


addButton.addEventListener('click', function() {
    // Retrieve the task from the input field
    const taskText = taskInput.value.trim();

    // Check if the task is not empty
    if (taskText !== '') {
        // Create a new list item element
        const listItem = document.createElement('li');

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        // Append the task span and delete button to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
});


taskList.addEventListener('click', function(event) {
    // Check if the clicked element has the "delete-button" class
    if (event.target.classList.contains('delete-button')) {
        // Get the parent list item and remove it from the task list
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const doc = new jsPDF();

    // Get all <li> elements
    const listItems = document.querySelectorAll('#task-list li');

    let verticalOffset = 10; // Initial vertical position

    // Loop through each <li> and add its content to the PDF
    listItems.forEach((item, index) => {
        const text = item.textContent.trim();
        doc.text(10, verticalOffset, `${index + 1}. ${text}`);
        verticalOffset += 10; // Adjust this value for spacing
    });

    // Save the PDF with a filename 'tasks.pdf'
    doc.save('tasks.pdf');
});
