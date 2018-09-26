import {HttpEvent} from '@angular/common/http';
import {Component, OnInit, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import {Photo} from '../photo/Photo';
import {PhotoService} from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter = '';
  hasMore = true;
  currentPage = 1;
  userName = '';


  constructor(private activatedRoute: ActivatedRoute, private service: PhotoService) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;

    this.photos = this.activatedRoute.snapshot.data['photos'];

  }

  load() {
    this.service
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
        console.log(this.photos.length);
      });
  }

}
