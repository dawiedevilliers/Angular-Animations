import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%) translateY(50px)',
      })),
      state('enlarge', style({
        transform: 'scale(1.1)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('spin => move', animate('500ms ease')),
      // transition('* => *', animate('500ms ease')),
      transition('* => move', [
        animate('2000ms', keyframes( [
          style({
            transform: 'translateX(0) rotateY(0)', offset: 0
          }),
          style({
            transform: 'translateX(50%) rotateY(90deg)', offset: 0.33
          }),
          style({
            transform: 'translateX(-75%) rotateY(180deg)', offset: 0.66
          }),
          style({
            transform: 'translateX(-100%)', offset: 1
          }),
        ]))
      ]
      ),
    ]),
    trigger('photoState2', [
      state('move', style({
        transform: 'translateX(-100%) translateY(50px)',
      })),
      state('enlarge', style({
        transform: 'scale(1.1)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('spin => move', animate('500ms ease')),
      // transition('* => *', animate('500ms ease')),
      transition('* => move', [
        animate('2000ms', keyframes( [
          style({
            transform: 'translateX(0) rotateY(0)', offset: 0
          }),
          style({
            transform: 'translateX(50%) rotateY(90deg)', offset: 0.33
          }),
          style({
            transform: 'translateX(-75%) rotateY(180deg)', offset: 0.66
          }),
          style({
            transform: 'translateX(-100%)', offset: 1
          }),
        ]))
      ]
      ),
    ]),
    trigger('divstate', [
      state('move', style({
        transform: 'translateX(-100%) translateY(50px)',
      })),
      state('enlarge', style({
        transform: 'scale(1.9)',
      })),
      state('spin', style({
        transform: 'rotateY(360deg) rotateZ(90deg)',
      })),
      // transition('spin => move', animate('500ms ease')),
      transition('* => *', animate('900ms ease')),
    ])
  ]
})
export class PhotoGalleryComponent implements OnInit {

  constructor() { }

  position: string;

  photoUrl = 'http://hdwpro.com/wp-content/uploads/2017/01/3D-Cool-Image.jpg';
  photoUrl2 = 'http://hdwpro.com/wp-content/uploads/2017/02/Stunned-Destiny-Background.jpg';

  ngOnInit() {
  }

  changePosition(newPosition: string) {
    this.position = newPosition;
  }

}
