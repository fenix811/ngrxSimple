import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';

import {ProductActionTypes, ProductActions} from '../actions/product.actions';
import { ProductService } from '../../services/productService';

@Injectable()
export class ProductEffects {
  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.LoadProducts),
  );

  constructor(
    // private productService: ProductService,
    private actions$: Actions,
  ) {}
}
