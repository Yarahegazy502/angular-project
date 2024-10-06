import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  message: string = 'Welcome to angularrrrrrrrrrrrrrrr';
  imageSrc = 'assets/images/home/leaves.avif';

  constructor(
    private router: Router
  ) { }
  getValue(ev: any): void {
    // console.log(ev.target.value);
    this.message = ev.target.value;
  }

  goToProducts(): void {
    console.log('products');
    this.router.navigate(['/products']);
    // this.router.navigateByUrl('/products');
  }
}
