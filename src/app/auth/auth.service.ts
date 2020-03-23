import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import * as firebase from 'firebase';
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;

  modalData = new Subject();

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { }

  getUserState() {
    return this.afAuth.authState;
  }

  login( email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
     /*  .then(userCredential => {
        if (userCredential) {
          this.router.navigateByUrl('/home');
        }
      }); */
  }


  createUser(user) {
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;

        userCredential.user.updateProfile({
          displayName: user.firstName + ' ' + user.lastName
        });

       /*  this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/home']);
          }); */
      })

      .catch(error => {
        this.eventAuthError.next(error);
      });
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`User/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      firstname: this.newUser.firstName,
      lastname: this.newUser.lastName,
      role: 'Network user'
    });
  }

  logout() {
    return this.afAuth.signOut()
    .then(() => {
      this.router.navigate(['/home']);
    });
  }

  sendModalData(data) {
    this.modalData.next(data);
  }
}
