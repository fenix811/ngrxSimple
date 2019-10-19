import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';

import {ProductActionTypes, ProductActions, LoadProductsSuccess} from '../actions/product.actions';
import { ProductService } from '../../services/productService';
import { mapTo, map, switchMap, tap} from 'rxjs/operators';


@Injectable()
export class ProductEffects {
  @Effect({dispatch: false})
  getProducts$ = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.LoadProducts),
    tap(() => console.log('tap called')),
    switchMap(() => {
      // tslint:disable-next-line: no-debugger
      debugger;
      return this.productService.getProducts()}),
    // mapTo((result) => new LoadProductsSuccess(result) )
    );

  constructor(
    private productService: ProductService,
    private actions$: Actions,
  ) {}
}
