import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PictureService } from './services/picture.service';

export interface Picture {
  date: string;
  explanation: string;
  hdurl: string;
  url: string;
  media_type: string;
  service_version: string;
  title: string;
  liked?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  count: number = 20;
  pictures: Picture[] = [];
  loading: boolean = false;
  dateFormat = 'yyyy/MM/dd';

  constructor(private pictureService: PictureService, private message: NzMessageService) { }

  ngOnInit() {
    this.getAstronomyPicturesOfTheDay();
  }

  getAstronomyPicturesOfTheDay() {
    this.loading = true;
    this.pictureService.getAstronomyPicturesOfTheDay(this.count).subscribe((data: Picture[]) => {
      console.log(data);
      setTimeout(() => {
        this.loading = false;
        this.pictures = data;
      }, 2000)
    }, error => {
      this.message.error('Ops! Error occured, try again later');
    })
  }

  likeThePicture(title: string) {
    let likedPicture: any = this.pictures.find(pic => pic.title === title);
    likedPicture.liked = true;
  }

  unLikeThePicture(title: string) {
    let likedPicture: any = this.pictures.find(pic => pic.title === title);
    likedPicture.liked = false;
  }
}
