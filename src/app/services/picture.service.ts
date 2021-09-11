import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Picture } from '../app.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  API_KEY = 'lwtlrU6u89BcMSJkscRACeWW0xvkRza6faNKxr0D';
  BASE_URL = 'https://api.nasa.gov/planetary/apod?';

  constructor(private http: HttpClient) { }


  getAstronomyPicturesOfTheDay(count: number) {
    return this.http.get<Picture[]>(`${this.BASE_URL}api_key=${this.API_KEY}&count=${count}`).pipe(
      map(pictures => {
        return pictures.map(picture => ({
          ...picture,
          liked: false
        }) as Picture)
      })
    );
  }

}
