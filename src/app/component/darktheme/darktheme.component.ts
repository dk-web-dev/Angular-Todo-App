import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-darktheme',
  templateUrl: './darktheme.component.html',
  styleUrls: ['./darktheme.component.css'],
})
export class DarkthemeComponent implements OnInit {
  setDarkMode: boolean = false;
  @Output() darkmode = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  chnageThemeMode() {
    this.setDarkMode = !this.setDarkMode;
    this.darkmode.emit(this.setDarkMode);
   
    console.log('value from child', this.setDarkMode);
  }
}
