import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MoviesService } from '../movies.service';
import { DomSanitizer } from '@angular/platform-browser';
import { IMovies } from '../interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('stopMovie', {static: false}) stopVideo: ElementRef;

  searchMovie: string;

  public httpMoviesSearch: IMovies[] = [];
  public errorMsg = [];

  constructor(
    private _httpMovieServices: MoviesService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this._httpMovieServices.getHttpMovies()
      .subscribe(
        data => this.httpMoviesSearch = data,
        error => this.errorMsg = error
      );
  }

  getEmbedUrl(idVideo) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + idVideo);
  }

  stopMovie() {
    return this.stopVideo.nativeElement.setAttribute('src', null);
   }

}
