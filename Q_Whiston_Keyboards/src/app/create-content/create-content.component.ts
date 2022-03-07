import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newKeyboardEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newKeyboard?: Content;

  constructor() { 
    let submitPromise = new Promise(function (didSend, notSent){
      let check = true;
      if (check){
        didSend("The keyboard has been submitted");
      }
      else{
        notSent("The keyboard was not submitted correctly")
      }
    });
  }

  ngOnInit(): void {
  }

  addKeyboard(idBox: string, titleBox: string, imgURLBox: string, descriptionBox: string, creatorBox: string, switchesBox: string, tagsBox: string): void {
    this.newKeyboard  = {
      id: parseInt(idBox),
      title: titleBox,
      imgURL: imgURLBox,
      description: descriptionBox,
      creator: creatorBox,
      switches: switchesBox,
      tags: tagsBox.split(",")
    };
    this.newKeyboardEvent.emit(this.newKeyboard);
  }

}
