import { Component, OnInit } from '@angular/core';
import { concat, delay, forkJoin, of, tap } from 'rxjs';

@Component({
  selector: 'app-fork-join-rxjs',
  templateUrl: './fork-join-rxjs.component.html',
  styleUrls: ['./fork-join-rxjs.component.scss']
})
export class ForkJoinRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // هتطبع اخر فاليو من كل observable
    // هتطبع  c => 3 => completed
    const observable1 = of('a' , 'b' ,'c')//.pipe(delay(3000));
    // const observable2 = of(1 , 2 ,3,4).pipe(delay(3000));
    // const observable3 = of(1 , 2 ,3,4).pipe(delay(6000));

    const observable2 = of(1 , 2 ,3,4).pipe(tap(()=>{throw new Error('error')}));
    const observable3 = of(1 , 2 ,3,4).pipe(delay(6000));

    const concatData = forkJoin(observable1 , observable2 , observable3);
    concatData.subscribe(
      val=>{console.log('value is = '+ val)}, // in success
      err=>{console.log(err)}, // in Error
      ()=>console.log('completed') // in complete

      )
  }

}
