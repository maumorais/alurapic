import {Photo} from '../photo/Photo';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string): Photo[] {
    descriptionQuery = descriptionQuery
      .trim()
      .toLowerCase();

    if (descriptionQuery) {
      return photos
         .filter(photo => photo
           .description
           .toLowerCase()
           .includes(descriptionQuery));
    } else {
      return photos;
    }
  }

}
