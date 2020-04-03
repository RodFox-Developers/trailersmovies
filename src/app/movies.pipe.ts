import { Pipe, PipeTransform } from '@angular/core';
import { IMovies } from './interfaces';


@Pipe({
  name: 'movieFilter'
})
export class MoviesPipe implements PipeTransform {

  transform(httpMovies: IMovies[], searchMovie: string): IMovies[] {
    if (!httpMovies || !searchMovie) {
      return httpMovies;
    }
    return httpMovies.filter(movie =>
      movie.name.toLowerCase().indexOf(searchMovie.toLowerCase()) !== -1
      );
  }

}
