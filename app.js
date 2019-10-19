//Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyByLj0sWfuzgSVuUE5Dop0l9PQ0qoKPN2c',
  authDomain: 'tnebsankar-15d5d.firebaseapp.com',
  databaseURL: 'https://tnebsankar-15d5d.firebaseio.com',
  projectId: 'tnebsankar-15d5d',
  storageBucket: 'tnebsankar-15d5d.appspot.com',
  messagingSenderId: '587371617961',
  appId: '1:587371617961:web:a96a18e322d7b9acf153b8'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Refernce message collection
let greenEnergyRef = firebase.database().ref('greenenergy');

//Listen to Form submit
document.getElementById('download-form').addEventListener('submit', submitForm);

//SUBMIT FORM
function submitForm(e) {
  e.preventDefault();
  //Get value
  const name = getElement('name');
  const email = getElement('email');

  //save message fn call
  saveMessage(name, email);

  //Show alert
  document.querySelector('.alert').style.display = 'block';
  //alert timeout - 3s
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
  //clear form
  document.getElementById('download-form').reset();
  //file
  window.open(
    './downloads/Green-Energy-Today_001.pdf',
    '_blank' // <- This is what makes it open in a new window.
  );
}

// Function to get form values
function getElement(id) {
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, email) {
  let newGreenEnergyRef = greenEnergyRef.push();

  newGreenEnergyRef.set({
    name: name,
    email: email
  });
}
