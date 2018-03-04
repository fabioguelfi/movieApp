import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  private ROOT_URL_GENRE = "https://api.themoviedb.org/3/genre/";
  private API_KEY = "?api_key=33092a849275dfe342ef839a9f14ddb9";
  private GENRE_NUMBER = "35/movies";
  private LANGUAGE = "&language=pt-BR";

  getMovies() {
    return this.http.get(this.ROOT_URL_GENRE + this.GENRE_NUMBER + this.API_KEY + this.LANGUAGE)
    .map(res => res)
  }
}
