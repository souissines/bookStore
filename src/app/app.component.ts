import { Component } from '@angular/core';
import * as firebase from "firebase";

import "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {

      apiKey: "AIzaSyCjczIwbcKKe9FJZBvvLW17VMYY72NV4Pk",
      authDomain: "library-1218c.firebaseapp.com",
      projectId: "library-1218c",
      storageBucket: "library-1218c.appspot.com",
      messagingSenderId: "376493069083",
      appId: "1:376493069083:web:5feaa2dff1a106e0eab9be",
      measurementId: "G-FM1W93PZGJ"
    }
     firebase.initializeApp(firebaseConfig);
  }
}
