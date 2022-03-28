import { identifierName } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newKeyboardEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateKeyboardEvent: EventEmitter<Content> = new EventEmitter<Content>()
  newKeyboard?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addKeyboard(id: number, title: string, imageUrl: string, description: string, tags: string, creator: string, switches: string): void {
    this.newKeyboard = {
      id: id,
      title: title,
      imgURL: imageUrl,
      description: description,
      tags: tags.split(","),
      creator: creator,
      switches: switches
    };
    this.newKeyboardEvent.emit(this.newKeyboard);
  }
  
  updateKeyboard(id: string, title: string, imageUrl: string, description: string, tags: string, creator: string, switches: string): void {
    this.newKeyboard = {
      id: parseInt(id),
      title: title,
      imgURL: imageUrl,
      description: description,
      tags: tags.split(","),
      creator: creator,
      switches: switches
    };
    this.updateKeyboardEvent.emit(this.newKeyboard);
  }

}
