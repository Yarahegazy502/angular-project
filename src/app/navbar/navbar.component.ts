import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() handleClick = new EventEmitter;
  goToPage(page: string): void {
    this.handleClick.emit(page);
  }
}
