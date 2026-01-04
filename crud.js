// Select the table body where the data lives
const tableBody = document.querySelector("tbody");

tableBody.addEventListener("click", function(e) {
    // Check if the clicked element is an Edit button
    if (e.target.classList.contains("edit-btn")) {
        
        // 1. Get the row (tr) containing the button
        const row = e.target.closest("tr");
        
        // 2. Extract data from the cells (td)
        // We use spread operator to get an array of text values
        const cells = Array.from(row.cells);
        const date = cells[0].innerText;
        const type = cells[1].innerText;
        const description = cells[2].innerText;
        const amount = cells[3].innerText;
        const category = cells[4].innerText;
        const status = cells[5].innerText;

        // 3. Handle the Edit logic
        // For a simple version, we can use a prompt, 
        // but usually, you'd fill a form. Here is a basic toggle example:
        
        const newDescription = prompt("Edit Description:", description);
        const newAmount = prompt("Edit Amount:", amount);
        

        if (newDescription !== null && newAmount !== null) {
            
            cells[2].innerText = newDescription;
            cells[3].innerText = newAmount;
            alert("Row updated successfully!");
        }
    }
});