import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IMovies } from 'src/app/interfaces';
import { MoviesService } from 'src/app/movies.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('stopMovie', {static: false}) stopVideo: ElementRef;

  searchMovie: string;

  public httpMovies: IMovies[] = [];
  public errorMsg = [];

  user: firebase.User;

  constructor(
    private auth: AuthService,
    private _httpMovieServices: MoviesService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this._httpMovieServices.getHttpMovies()
      .subscribe(
        data => this.httpMovies = data,
        error => this.errorMsg = error
      );

    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      });
  }

  logout() {
    this.auth.logout();
  }

  getEmbedUrl(idVideo) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + idVideo);
  }

  stopMovie() {
    return this.stopVideo.nativeElement.setAttribute('src', null);
   }
}
