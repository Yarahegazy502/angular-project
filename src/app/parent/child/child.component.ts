import { AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, DoCheck, AfterContentInit {
  @Input({ required: true }) message: string = '';
  @Output() clickHandler = new EventEmitter;

  id!: number;
  data: any;

  constructor() {
    console.log('constructor');

  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //   console.log('ngOnChanges')
  // }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('onInit', 'test');
    this.id = 1;
    this.getData();
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked');

  }
  getData() {
    this.data = [
      { id: 1, name: 'ali' },
      { id: 1, name: 'aya' },
      { id: 1, name: 'ahmed' },
      { id: 1, name: 'kareem' },
    ]
  }
  getChildId(): void {
    this.clickHandler.emit(this.id);
  }
}
