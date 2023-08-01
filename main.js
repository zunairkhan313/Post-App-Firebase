 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAnalytics} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
 import { getStorage, ref, uploadBytes,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
  const firebaseConfig = {
    apiKey: "AIzaSyDtc5wB2siTJG_nCgldK0Z8mg65x9Ilfow",
    authDomain: "new-post-b8e63.firebaseapp.com",
    projectId: "new-post-b8e63",
    storageBucket: "new-post-b8e63.appspot.com",
    messagingSenderId: "46510342157",
    appId: "1:46510342157:web:97f629601d245e1d1e5544"
  };
  
  const btn = document.getElementById("btn")
  btn.addEventListener('click',()=>{
    const main = document.getElementById("main1").style.display = "block";
    const name = document.getElementById("name").value;
const number = document.getElementById("number").value

const  show = document.getElementById("show1").innerHTML = name
console.log(show);
const ss =  document.getElementById("show2").innerHTML = number
console.log(ss);


    const storage = getStorage();

    const file = document.getElementById("file").files[0]
    
    
    
const storageRef = ref(storage, 'zunair');

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
   alert("upload");
});



      getDownloadURL(ref(storage, 'zunair'))
      .then((url) => {
      
        const img = document.getElementById('myimg');
        img.setAttribute('src', url);
           
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
})





// function show(){


// }
// show()

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

