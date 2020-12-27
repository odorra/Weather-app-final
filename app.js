/* Global Variables */
const btn = document.getElementById("generate");
const feeling = document.getElementById("feelings");

const zipInput = document.getElementById("zip");
// Create a new date instance dynamically with JS
let d = function newDate() {
  newDate = d.getMonth()+ 1 + "."+ d.getDate()+'.'+ d.getFullYear()};
let baseUrl = "https://api.openweathermap.org/data/2.5/weather";
let url= baseUrl + "?zip=" + `zipInput.value` + "&appid=40a8d93c760fd89e7f9624dda613ae1e&units=metric"
//Take care that getMonth() counts month from 0 to 11 so you need to add 1 to its response 
const getData = async () => {
  //code to fetch data from api (await the fetch)
  const request = await fetch ('/getData');

  try {
    //code to convert json data and return result (await conversion)
    const call = async () => {
      const response = await request.json()
      return response}
  } catch (error) {
    //code to log error
    console.log(error)
  }
};

const postData = async (url ='/postData', data = {}) => {
  //code to fetch route url and write request method, credentials, headers and body
  const response = await fetch (url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'content.Type': 'application/json' },
    body: JSON.stringify(data),
    temp: 'data.main.temp',
  });
};
  try {
    const dataNew = async() => {
      await response.json();
      console.log(dataNew);
      return dataNew;}
  } catch (error) {
    //code to log error
    console.log(error)
  }

const updateUI = async () => {
  //code to fetch data from server. Use url from GET route (await the fetch)
  await fetch('/getData');
  try {
      //code to convert json data. (await conversion)
      //code to update the UI with fetched data
      const update = await request.json();
      console.log(update);
      document.getElementById('date').innerHTML = `Date: ${update[0].date}`;
      document.getElementById('temp').innerHTML = `Temprature: ${update[0].temp}`;
      document.getElementById('content').innerHTML = `I feel: ${update[0].content}`;
  } catch (error) {
    //code to log error
      console.log("error", error)
  }
};
btn.addEventListener('click', performAction) 
//Don't use parentheses for function inside event listener or it will not wait for event  
function performAction() {
  getData(url)
      .then((data) => postData('/postData', { temp: 'data.main.temp', date: `d.getMonth()+ 1 + "."+ d.getDate()+'.'+ d.getFullYear()`, content: feelings }))
      .then(() => updateUI())       
};