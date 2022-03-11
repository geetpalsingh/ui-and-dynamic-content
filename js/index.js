let fm = document.querySelector('form');
// Save the reference to text-field into a variable. | <input type="text">
let ent = document.getElementById('entry');
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button>
let but = document.getElementById('btn');
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let lis = document.getElementById('collected-items');
// Save the reference to paragraph for feedback | <p class="feedback"></p>
// let fb = document.getElementById('.feedback');

// Start function addItem.
function addItem(e) {

    let fb = document.getElementById('feedback');
    // prevent default behaviour of form
    e.preventDefault();
    // Create list-item and store output in a variable.
    var output = document.createElement("li");
    // Check if user entered the value in input text-field.

    if(ent.value !== ''){
        
    
    // If so:
       // Use textContent property on created list-item
       
       // and assign it with the value of the text written in the text-field
       output.textContent = ent.value;
       // Append list item to unordered list.
       lis.appendChild(output);
       // Clear a feedback-message.
       fb.innerHTML = "";
       // Clear the text-field.
       fm.reset();
       // Put the cursor back to text-field  
       ent.focus();
    // End if. 
    }
    // Otherwise:
    else{
       // Print the message nothing entered in the paragraph "feedback"
        // feed.push('Nothing entered')
        fb.textContent = "Nothing entered!";
    //    console.log(feed);
    // End otherwise.
    }
    
// End function addItem.
}
// Register your function addItem for click event on button.
fm.addEventListener('submit', addItem);
