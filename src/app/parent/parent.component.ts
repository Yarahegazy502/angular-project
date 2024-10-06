import { AfterViewInit, Component, DoCheck, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit {
  msg: string = 'welcome';

  @ViewChild(ChildComponent) childComp!: ChildComponent;
  @ViewChildren(ChildComponent) childComps!: QueryList<ChildComponent>;
  @ViewChildren(ChildComponent, { read: ElementRef }) childComps2!: QueryList<ElementRef>;
  @ViewChild(ChildComponent, { read: ElementRef }) child!: ElementRef;
  @ViewChild('message') message!: ElementRef;


  constructor() {
    // console.log(this.childComp);
    // console.log(this.child);
    // console.log(this.childComps);
    // console.log(this.childComps2);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  // x ==> ngx
  ngAfterViewInit(): void {
    console.log(this.childComp);
    console.log(this.child);
    console.log(this.childComps);
    console.log(this.childComps2);
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked');

  }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }

  getId(id: number): void {
    console.log(id);
    // console.log(this.childComp);
    // console.log(this.child);
    // console.log(this.childComps);
    // console.log(this.childComps2);
    // console.log(this.message.nativeElement.innerHTML);
    // this.message.nativeElement.style.color = 'red';
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
