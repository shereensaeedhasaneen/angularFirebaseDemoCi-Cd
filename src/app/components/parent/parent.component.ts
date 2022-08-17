import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit ,DoCheck , OnChanges{

  constructor() { }
  //textvalue='';
textvalue:any[]=[]
  ngDoCheck(): void {
    console.log('docheck in parent')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchange in parent')
  }

  onTextChange(value:any){
    //this.textvalue=value
    this.textvalue.push(value)
    this.textvalue=[...this.textvalue]
      console.log('text changed')
  }
  ngOnInit(): void {
   // console.log('oninit')
  }

}
