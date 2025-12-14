// PART 4: DEATH BY JAVASCRIPT

function alphabetOrder(str) {
    return str.split("").sort().join("");
  }
  console.log(alphabetOrder("webmaster"));
  
  function capitalizeWords(str) {
    return str.split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  console.log(capitalizeWords("the quick brown fox"));
  
  function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
  }
  console.log(countVowels("The quick brown fox"));
  
  function randomId(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
  console.log(randomId(8));
  
  function longestCountryName(countries) {
    return countries.reduce((a, b) => b.length > a.length ? b : a);
  }
  console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
   