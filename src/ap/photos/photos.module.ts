import { AppRoutingModule } from '../app.routing.module';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {PhotoComponent} from './photo/photo.component';
import {PhotoService} from './photo/photo.service';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { PhotosComponent } from './photo-list/photos/photos.component';


@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    FilterByDescription
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class PhotosModule {

}
