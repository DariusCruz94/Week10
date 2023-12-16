let id = 0;
// Initialize a variable to keep track of unique IDs for each row

document.getElementById('add').addEventListener('click', () => {// Attach a click event listener to the element with the ID 'add'
 let createdDate = new Date();
 // Get the current date and time

 let table = document.getElementById('list');
 // Gets a reference to the table with the ID 'list'

 let row = table.insertRow(1);
 // Insert a new row at the second position in the table (index 1)

 row.setAttribute('id', `item-${id}`);
 // Set the 'id' attribute of the row to a unique value using the id variable

 
 row.insertCell(0).innerHTML = document.getElementById('new-task').value;
 row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
 row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
 row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
 // Insert cells into the new row and populate them with values

 let actions = row.insertCell(4);
 actions.appendChild(createDeleteButton(id++));
  // Insert a cell with a 'Complete' button created by the createDeleteButton function

 document.getElementById('new-task').value = '';
  // Clear the value of the 'new-task' input after adding a new row
});

function createDeleteButton(id) {
    // Function to create a 'Complete' button with a specified ID

    let btn = document.createElement('button');
     // Create a new button element

    btn.className = 'btn btn-primary';
    btn.id = id;
    // Set the class and ID attributes of the button

    btn.innerHTML = 'Complete';
    // Set the innerHTML of the button to 'Complete'

    btn.onclick = () => {
         // Attach a click event listener to the button

        console.log(`Deleting row with id: item-${id}`);
        // Log a message indicating the deletion of the row with a specific ID

        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    // Get a reference to the row to delete and remove it from its parent node

    return btn;
     // Return the created button
}