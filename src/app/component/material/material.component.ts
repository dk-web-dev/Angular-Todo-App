import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent implements OnInit {
  title = 'Angular Material Tutorial';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  constructor() {}

  ngOnInit(): void {}
}
