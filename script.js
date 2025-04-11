function insert_Row() {
    // Get the table by ID
    const table = document.getElementById("sampleTable");

    // Create a new row
    const newRow = table.insertRow(0); // insert at the top (index 0)

    // Create two new cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the content of the new cells
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";
}
