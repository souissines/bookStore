import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  createNewUser(username: string,email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve('auth');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve('auth');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
    location.reload();
  }


}
