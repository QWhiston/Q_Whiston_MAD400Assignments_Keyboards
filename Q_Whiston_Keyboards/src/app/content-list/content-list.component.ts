import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

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

    let corsairK100: Content;
    corsairK100 = {
      id: 3,
      title: "Corsair K100 RGB Optical",
      type: "Mechanical",
      imgURL: "https://m.media-amazon.com/images/I/71Qy2Y+ol6L._AC_SY450_.jpg",
      description: "A 100% keyboard responsive optical switches",
      creator: "Corsair",
      switches: "Linear"
    }

    let lightSpeed: Content;
    lightSpeed = {
      id: 4,
      title: "Logitech G915 Lightspeed",
      type: "Mechanical",
      imgURL: "https://cdn.mos.cms.futurecdn.net/KL6ujwhaQ4qNLuKSAimc9U-970-80.jpg.webp",
      description: "A 100% keyboard thats wireless",
      creator: "HyperX",
      switches: "Linear"
    }

    let keychron: Content;
    keychron = {
      id: 5,
      title: "Keychron K2 (Version 2)",
      type: "Mechanical",
      imgURL: "https://cdn.mos.cms.futurecdn.net/sCVjjFFcgYh4MeMwzvzQa6-970-80.jpg.webp",
      description: "A 60% keyboard that is also wireless and more affordable",
      creator: "Future",
      switches: "Linear"
    }

    let keyboards: Array<Content> = [blackWidow, vulcan, alloyCore, corsairK100, lightSpeed, keychron];
   }

  ngOnInit(): void {
    
  }

}
