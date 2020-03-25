import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  user: firebase.User;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      });
  }

  logout() {
    this.auth.logout();
  }
}
