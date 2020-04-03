import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MoviesService } from '../movies.service';
import { DomSanitizer } from '@angular/platform-browser';
import { IMovies } from '../interfaces';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild('stopMovie', {static: false}) stopVideo: ElementRef;

  public videoHeader = 'https://firebasestorage.googleapis.com/v0/b/trailersmovies-79632.appspot.com/o/headerMovie%2FterminatorDarkFate.mp4?alt=media&token=946a9b09-5c27-49b0-ac96-6ad42fa4e593';

  isMuted: boolean = true;

  user: firebase.User;

  public httpMovies: IMovies[] = [];
  public errorMsg = [];

  constructor(
    private _httpMovieServices: MoviesService,
    private sanitizer: DomSanitizer,
    private auth: AuthService
    ) {}

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

  getEmbedUrl(idVideo) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + idVideo);
  }

  stopMovie() {
    return this.stopVideo.nativeElement.setAttribute('src', null);
   }

  audioToggle() {
      this.isMuted = !this.isMuted;
  }

  getFilterMovies(g): IMovies[] {
    const filteredMovie = this.httpMovies.filter((httpMovie) => {
      return httpMovie.genre === g;
    });

    return filteredMovie.reverse();

  }

}
