import { Component, OnInit } from '@angular/core';
import { OpenCloseAnimation } from '../../_animations/index';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[OpenCloseAnimation],
})
export class AnimationComponent implements OnInit {
   isOpen:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
