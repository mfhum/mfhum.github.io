import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
//function to return list of numbers from 0 to n-1
numSequence(n: number): Array<number> {
  return Array(n);
}
}
