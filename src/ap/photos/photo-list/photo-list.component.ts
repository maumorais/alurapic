import {Photo} from '../photo/Photo';
import {PhotoService} from '../photo/photo.service';
import { HttpEvent } from '@angular/common/http';
import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter = '';

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }
}
