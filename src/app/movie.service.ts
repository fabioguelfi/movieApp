import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  private ROOT_URL_MOVIE: string = "https://api.themoviedb.org/3/movie/";
  private ROOT_URL_GENRE: string = "https://api.themoviedb.org/3/genre/";
  private API_KEY:string = "?api_key=33092a849275dfe342ef839a9f14ddb9";
  private GENRE_NUMBER:string = "35/movies";
  /*popular com uma func que da a opcao ao usuario escolher o genero*/
  private LANGUAGE:string = "&language=pt-BR";

  getMovies() {
    return this.http.get(this.ROOT_URL_GENRE + this.GENRE_NUMBER + this.API_KEY + this.LANGUAGE)
    .map(res => res)
  }

  getMovieById(id: any) {
    return this.http.get(this.ROOT_URL_MOVIE + id + this.API_KEY + this.LANGUAGE)
  }

}
