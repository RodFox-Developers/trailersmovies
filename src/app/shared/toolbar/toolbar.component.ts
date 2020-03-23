import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @ViewChild ('loginModal', {static: true}) loginModal: ElementRef;


  user: firebase.User;

  authError: any;


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      });

    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
    console.log(this.loginModal);
  }

  createUser(frmUser) {
    this.auth.createUser(frmUser.value);
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
  }

  logout() {
    this.auth.logout();
  }

  closeModal() {
    this.loginModal.nativeElement.hidden = 'true';

  }

}
