import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/state/appState';
import { LoadProducts, SelectProduct } from '../state/actions/product.actions';

import {Observable, fromEvent, interval} from 'rxjs';
import { switchMap, mapTo, repeat, take, tap, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  selectedProductId: number;
  users$ = ['user1', 'user2', 'user3'];
  addresses$ = ['address1', 'address2', 'address3'];

  constructor( private store: Store<IAppState>) {

  }

  ngOnInit() {
// fromEvent(document, 'click').pipe(
//   switchMap((event) => {
//     return interval(1000).pipe(
//       tap(i => console.log(i)),
//       take(5),
//       //reduce((acc, v) => acc + v)
//     );
//   })
// )
//     .subscribe({
//       next: () => console.log('next'),
//       error: () => console.log('complete')
//    });

   ///////////////////////////

  // const documentClick$ = fromEvent(document, 'click');
  // documentClick$
  //     .subscribe((event) => {
  //       console.log('document click start');
  //       interval(1000).pipe(
  //         take(5)
  //       ).subscribe(v => {
  //         console.log(v);
  //       });
  //   });

  }


test1() {
  // tslint:disable-next-line: no-debugger
  debugger;
  this.store.dispatch(new LoadProducts());
}

selectPrAndGetDetails() {
  // tslint:disable-next-line: no-debugger
  debugger;

  this.store.dispatch(new SelectProduct(this.selectedProductId));
}

}
