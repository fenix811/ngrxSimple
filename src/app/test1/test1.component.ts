import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/state/appState';
import { LoadProducts } from '../state/actions/product.actions';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  constructor( private store: Store<IAppState>) {

  }

  ngOnInit() {

  }


test1() {
  // tslint:disable-next-line: no-debugger
  debugger;
  this.store.dispatch(new LoadProducts());
}

}
