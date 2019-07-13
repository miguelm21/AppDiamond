import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.page.scss'],
  templateUrl: './login.page.html',
 
})
export class LoginPage implements OnInit {
  username;
  password;

  constructor(private router : Router, public fAuth: AngularFireAuth) { }

  ngOnInit() {
    console.log(this.router);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        this.router.navigate(['/home']);
      } else {
        // User is signed out.
        // ...
      }
    });
  }

  home(){
    console.log('home');
    this.router.navigate(['/home']);
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.username, this.password).then( res => {
      console.log(res);
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
    });
  }

}
