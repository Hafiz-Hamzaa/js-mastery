// Lecture 28 : Fetch API in JS
// Fetch method aik asyncrnous fnc hota hai jiskai zriye ham internet per request bejte hai ye hame promise return krkai dekhta hai (Request - Response Cycle Circle)
// Pehle waqt me Jb API se hame data receive hota tha to uska format XML hota tha but ajkai time JSON format hota hai ham usko json method ka use krkai apne respone ko sh se use krskte hai . JSON ab async fnc hota hai to ye hame second promise return krkai dekhta hai
// Understanding Terms : AJAXML ----- AJAJ

const URL = "https://randomuser.me/api/";
async function getData() {
  try {
    let data = await fetch(URL);
    let response = await data.json();
    console.log(response);
    console.log(response.info);
  } catch (error) {
    console.log(`Error Message : ${err}`);
  }
}
getData();

// Noted: Agr apko response ko thora readable banna hai to ap JSON Formattor Website use krskte ho

// Different Types ki HTTP Verbs Request hoti hai
// GET Request , POST Request , DELETE Request , PATCH Request , PUT Request

// Status Code
// 200 : successful status
// 404 : Page Not Found
// 500 : Server Error
// 400 : Client Error
