import { Component, OnInit } from '@angular/core';
import { ChangeAnimation } from '../../../_animations/index';

@Component({
  selector: 'app-change-animation',
  templateUrl: './change-animation.component.html',
  styleUrls: ['./change-animation.component.css'],
  animations:[ChangeAnimation]
})
export class ChangeAnimationComponent implements OnInit {

  currentState: boolean  = true;
  constructor() { }

  ngOnInit(): void {
  
  }

  changeState(){
     this.currentState =!this.currentState
     console.log(this.currentState)
  }

 

}
