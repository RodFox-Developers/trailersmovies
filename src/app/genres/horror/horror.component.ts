import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { IMovies } from 'src/app/interfaces';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent implements OnInit {

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
    return this.sanitizer.bypassSecurityTrustResourceUrl('http://www.hd-trailers.net/embed/' + idVideo + '/1-trailer-720p/');
  }

  getFilterMovies(g): IMovies[] {
    const filteredMovie = this.httpMovies.filter((httpMovie) => {
      return httpMovie.genre === g;
    });
    return filteredMovie.reverse();
  }

}
