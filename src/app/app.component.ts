import { Component,isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Material';
  setTheme: boolean = false;

  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }
   
  changeTheme(event: boolean) {
    this.setTheme = event;

    console.log('value from parent cmp', this.setTheme);
  }
}
