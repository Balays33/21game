console.log("test 4 page ");

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var firebaseConfig = {
    apiKey: "AIzaSyC-n76CAcBmeqZV-GaGgac547YbMl9KYDk",
    authDomain: "test-abafd.firebaseapp.com",
    databaseURL: "https://test-abafd.firebaseio.com",
    projectId: "test-abafd",
    storageBucket: "test-abafd.appspot.com",
    messagingSenderId: "848124501738",
    appId: "1:848124501738:web:96414b6973d3d805758193"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();


// get elements
const testCloud = document.getElementById('test4');
console.log(testCloud);

writeUserData(123,"justy")
function writeUserData(userId, name) {
    firebase.database().ref('users/' + userId).set({
      username: name,
    
    });
  }
  


// get elements
const Transaction = document.getElementById('Transaction');
// create references
const dbTransaction = firebase.database().ref("ShareSplit/Transaction");
//Sync object changes
    dbTransaction.on('value', snap => {
      Transaction.innerHTML = JSON.stringify(snap.val(), null, 3);
      console.log(snap.val());
    });



// get elements
const getdataForCloud = document.getElementById('object');
console.log(getdataForCloud);
// create references
const dbGetData = firebase.database().ref("Button/Layer"); 

SyncCloudData(dbGetData);

// Sync cloud data
function SyncCloudData(dbGetData) {
    //Sync object changes
    dbGetData.on('value', snap => {
        getdataForCloud.innerHTML = JSON.stringify(snap.val(), null, 3);
        console.log(snap.val());
    });
}

function writeF(){
  console.log("Work write");
  const sendData = document.getElementById("senddata").value;
  console.log(sendData);
  firebase.database().ref('Button/').set({
    Layer: sendData,
  
  });


}