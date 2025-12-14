// PART 3: DATE FUNCTIONS

function dateExercises() {

    let today = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June",
                  "July","August","September","October","November","December"];
  
    // 1. Days in month
    let daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    console.log("Days in month:", daysInMonth);
  
    // 2. Month name
    console.log("Month name:", months[today.getMonth()]);
  
    // 3. Weekend check
    console.log("Is weekend:", today.getDay() === 0 || today.getDay() === 6);
  
    // 4. Yesterday
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    console.log("Yesterday was:", days[yesterday.getDay()]);
  
    // 5. First letter of today
    console.log("First letter of today:", days[today.getDay()].charAt(0));
  }
  
  dateExercises();
  