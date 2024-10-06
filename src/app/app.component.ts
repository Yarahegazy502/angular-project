import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-structure';
  compName: string = 'home';
  changeComp(comp: string): void {
    console.log(comp);
    this.compName = comp;
  }
}
