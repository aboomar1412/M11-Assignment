// PART 1: STRINGS & STRING MANIPULATION

function stringExercises() {

    // 1. Get name length
    let name = prompt("Enter your name:");
    alert("Your name has " + name.length + " characters");
  
    // 2. Find character by index
    let index = parseInt(prompt("Enter a number:"));
    alert("Character at that position: " + name.charAt(index));
  
    // 3. Concatenate first and last name
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    alert("Your name is: " + firstName.concat(" ", lastName));
  
    // 4. Find index of 'fox'
    let text1 = "The quick brown fox jumps over the lazy dog";
    alert("Index of 'fox': " + text1.indexOf("fox"));
  
    // 5. Find last index of 'fox'
    let text2 = "The quick brown fox jumps over the lazy fox";
    alert("Last index of 'fox': " + text2.lastIndexOf("fox"));
  
    // 6. Replace text with user's name
    let text3 = "The quick brown fox jumped over the lazy dog";
    let fullName = prompt("Enter your full name:");
    alert(text3.replace("the lazy dog", fullName));
  
    // 7. Search for word
    let word = prompt("Enter a word to search:");
    alert("Word found at index: " + text1.search(word));
  
    // 8. Extract and uppercase
    let old_string = "The quick brown fox jumps over the lazy dog";
    let new_string = old_string.slice(31);
    alert(new_string.toUpperCase());
  
    // 9. Trim spaces and lowercase
    let text4 = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
    alert(text4.trim().toLowerCase());
  
    // 10. Capitalize first letter
    let text5 = "the quick brown fox jumps over the lazy dog";
    alert(text5.charAt(0).toUpperCase() + text5.slice(1));
  }
  
  // Run Part 1
  stringExercises();