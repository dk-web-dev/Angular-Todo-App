import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Material';
  setTheme: boolean = false;

  changeTheme(event: boolean) {
    this.setTheme = event;

    console.log('value from parent cmp', this.setTheme);
  }
}
