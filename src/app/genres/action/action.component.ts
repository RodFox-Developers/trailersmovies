import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { IMovies } from 'src/app/interfaces';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  @ViewChild('stopMovie', {static: false}) stopVideo: ElementRef;

  public httpMovies: IMovies[] = [];
  public errorMsg = [];

  constructor(private _httpMovieServices: MoviesService,  private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._httpMovieServices.getHttpMovies()
      .subscribe(
        data => this.httpMovies = data,
        error => this.errorMsg = error
      );
  }

  getEmbedUrl(idVideo) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + idVideo);
  }

  getFilterMovies(g): IMovies[] {
    const filteredMovie = this.httpMovies.filter((httpMovie) => {
      return httpMovie.genre === g;
    });
    return filteredMovie.reverse();
  }

  stopMovie() {
    return this.stopVideo.nativeElement.setAttribute('src', null);
   }

}
