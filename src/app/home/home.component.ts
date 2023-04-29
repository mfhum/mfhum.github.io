import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.responsive.scss', './home.animations.scss']
})
export class HomeComponent {
//function to return list of numbers from 0 to n-1
numSequence(n: number): Array<number> {
  return Array(n);
}
}
