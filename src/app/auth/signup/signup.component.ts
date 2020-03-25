import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authError: any;
  user: firebase.User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getUserState()
    .subscribe( user => {
      this.user = user;
    });

    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  createUser(frm) {
    this.auth.createUser(frm.value);
  }

}
