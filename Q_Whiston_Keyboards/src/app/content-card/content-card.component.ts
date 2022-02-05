import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  keyboardList: ContentList;

  constructor() { 
    let blackWidow: Content;
    blackWidow = {
      id: 0,
      title: "Black Widow",
      type: "Mechanical",
      imgURL: "https://assets2.razerzone.com/images/blackwidow-2019/BlackWidow2019_OGimage-1200x630.jpg",
      description: "The tactile switches of the Black Widow are one of the reasons its Razer's best selling",
      creator: "Razer",
      switches: "Tactile"
    }

    let vulcan: Content;
    vulcan = {
      id: 1,
      title: "Vulcan TKL Pro",
      type: "Mechanical",
      imgURL: "https://m.media-amazon.com/images/I/81P9ld98tLL._AC_SY450_.jpg",
      description: "The Vulcan TKL Pro is an award winning keyboard that is recommended by many pro eSport players",
      creator: "Roccat",
      switches: "Linear"
    }

    let alloyCore: Content;
    alloyCore = {
      id: 2,
      title: "HyperX Allot Core RGB",
      type: "Membrane",
      imgURL: "https://assets2.rockpapershotgun.com/hyperx-alloy-core-keyboard.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/hyperx-alloy-core-keyboard.jpg",
      description: "A 100% keyboard with bright lights and good on the wallet",
      creator: "HyperX",
      switches: "Linear"
    }

    //add objects to array
    this.keyboardList = new ContentList(blackWidow)
    this.keyboardList.addToArray(vulcan)
    this.keyboardList.addToArray(alloyCore)

    //list info of keyboards by referencing index
    this.keyboardList.info(0)
    this.keyboardList.info(1)
    this.keyboardList.info(2)

  }

  ngOnInit(): void {
  }

}
