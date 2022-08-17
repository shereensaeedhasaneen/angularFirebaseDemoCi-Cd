import { Component, OnInit, DoCheck, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit ,DoCheck , OnChanges {

  constructor() { }
 // @Input() textvalue='';
  @Input() textvalue:any[]=[]
  ngDoCheck(): void {
    console.log('DoCheck in child')
  }
  ngOnChanges(): void {
    console.log('OnChanges in child')
  }

  ngOnInit(): void {
  }

}
