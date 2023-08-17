// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { initializeApp } from 'firebase/app'
import { getAuth,connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBEiyy2renLbmQ8eQ9Z2UaBaEinMXDUzaE",
  authDomain: "myproject-506cd.firebaseapp.com",
  projectId: "myproject-506cd",
  storageBucket: "myproject-506cd.appspot.com",
  messagingSenderId: "412836549746",
  appId: "1:412836549746:web:6fcbaa881715fe500b1eeb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

if (location.hostname === "localhost") {
    connectAuthEmulator(getAuth(), "http://localhost:9099");
  }

const app = createApp(App)

app.use(router)

app.mount('#app')

