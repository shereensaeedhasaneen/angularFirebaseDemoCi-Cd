import { Component, OnInit } from '@angular/core';
import { concat, delay, of,tap } from 'rxjs';

@Component({
  selector: 'app-concat-rxjs',
  templateUrl: './concat-rxjs.component.html',
  styleUrls: ['./concat-rxjs.component.scss']
})
export class ConcatRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable1 = of('a' , 'b' ,'c').pipe(delay(3000));
    //const observable2 = of(1 , 2 ,3);
    const observable2 = of(1 , 2 ,3).pipe(tap(()=>{throw new Error('error')})); // في حاله الايرور مش هيوقف كل حاجه هيوقف دا بس وال بعده لكن ال قبله لو مفيهوش ايرور مش هيقف عادي
    const observable3 = of('a' , 'b' ,'c');
    const concatData = concat(observable1 , observable2 ,observable3);
    concatData.subscribe(
      val=>{console.log('value is = '+ val)}, // in success
      err=>{console.log(err)}, // in Error
      ()=>console.log('completed') // in complete

      )
  }

}
