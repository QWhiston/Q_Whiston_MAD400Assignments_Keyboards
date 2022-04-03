import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  @Input()
  keyboards: any;
  titleFound?: boolean;

  Display(i: number){
    console.log(this.keyboards.id[i]);
    console.log(this.keyboards.title[i]);
  }
  
  checkForTitle(title: string): void {
    if (this.keyboards.some((k: { title: string; }) => k.title === title)) {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
