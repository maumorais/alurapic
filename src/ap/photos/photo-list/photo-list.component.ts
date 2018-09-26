import { HttpEvent } from '@angular/common/http';
import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Photo} from '../photo/Photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }
}
