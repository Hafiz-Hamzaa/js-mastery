// Lecture 30 : Local Storage in JS

// ------------ Local Storage 
// Local Storage browser ka feature hai jo aapka data client side (user ke browser me) store karne ki ijazat deta hai.Data browser me save hota hai, server pe nahi.Data tab tak rehta hai jab tak user manually delete na kare.Data string ke form me store hota hai. Size limit (5-10 mb)

// Local Storage ke basic methods
// setItem(key, value);
localStorage.setItem("username", "Hamza");

// getItem(key)
let user = localStorage.getItem("username");
console.log(user); // Hamza

// removeItem(key)
localStorage.removeItem("username");

// clear() : all clear data
localStorage.clear();

// lenght or key also used as well

// Local Storage me objects/arrays store karna
// Local Storage sirf strings store karta hai, isliye objects ya arrays ko JSON me convert karna padta hai.
let userObj = {
    name: "Hassan",
    age: 20
}
localStorage.setItem('user', JSON.stringify(userObj))
let retrieveObj = JSON.parse(localStorage.getItem(age))
console.log(retrieveObj);

// // ------------ Session Storage
// sessionStorage bilkul localStorage jaisa hi hota hai, bas ek major difference hai:
// LocalStorage: Data permanent rehta hai (tab tak jab tak user manually delete na kare).
// SessionStorage: Data temporary hota hai, sirf browser tab/session ke liye. Tab close karte hi data delete ho jata hai.