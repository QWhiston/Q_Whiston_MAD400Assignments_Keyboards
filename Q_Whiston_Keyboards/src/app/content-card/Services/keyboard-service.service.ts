import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KEYBOARDLIST } from 'src/app/helper-files/contentDb';
import { MessageService } from './message-service.service';
import { Content } from 'src/app/helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})
export class KeyboardServiceService {

  constructor(private messageService: MessageService) { }

  getContent(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return of(KEYBOARDLIST);
  }

  getContentItem(id: number): Observable<Content>{
    this.messageService.add(`Content Item at id: ${id}`);
    return of(KEYBOARDLIST[id]);
  }
}
