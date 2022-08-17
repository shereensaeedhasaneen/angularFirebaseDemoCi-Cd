import { Component, OnInit } from '@angular/core';
import { concat, delay, of } from 'rxjs';

@Component({
  selector: 'app-concat-rxjs',
  templateUrl: './concat-rxjs.component.html',
  styleUrls: ['./concat-rxjs.component.scss']
})
export class ConcatRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable1 = of('a' , 'b' ,'c').pipe(delay(3000));
    const observable2 = of(1 , 2 ,3);
    const concatData = concat(observable1 , observable2);
    concatData.subscribe(
      val=>{console.log('value is = '+ val)}, // in success
      err=>{console.log(err)}, // in Error
      ()=>console.log('completed') // in complete

      )
  }

}
