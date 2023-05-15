import { Binary } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.responsive.scss', './home.animations.scss','./home.showoff.scss']
})
export class HomeComponent {
//function to return list of numbers from 0 to n-1
numSequence(n: number): Array<number> {
  return Array(n);
}
//function to declare if you are in contact me
  isContacting:boolean = false;

constructor(private router: Router) {}

onContact(){
  var returningbol:boolean = !this.isContacting;
  return this.isContacting = returningbol;
  console.log(returningbol);
}
isOnContact(){
  console.log("check: " + this.isContacting)
  return this.isContacting;
}

}
