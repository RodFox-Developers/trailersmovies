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

  public videoHeader = './assets/videos/terminatorDarkFate.mp4';
  isMuted: boolean = true;

  user: firebase.User;

  public httpMovies: IMovies[] = [];
  public errorMsg = [];

  constructor(
    private _httpMovieServices: MoviesService,
    private sanitizer: DomSanitizer,
    private auth: AuthService
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

  getHeaderEmbedUrl() {
    // to embed from youtube
/*     return this.getEmbedUrl(this.httpMovies[0].video + '?version=3&autoplay=1;&mute=1;&controls=0;&modestbranding=0;&loop=1;&playlist=' + this.httpMovies[0].video); */

    // to embed from server
    return this.videoHeader;
  }

  getEmbedUrl(idVideo) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('http://www.hd-trailers.net/embed/' + idVideo + '/1-trailer-720p/');
  }

  stopMovie() {
    this.stopVideo.nativeElement.setElementAttribute('src', null);
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
