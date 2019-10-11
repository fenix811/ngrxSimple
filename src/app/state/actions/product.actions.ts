import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  LoadProductsSuccess = '[Product] Load Products Success',
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LoadProductsSuccess;
}

export type ProductActions = LoadProducts | LoadProductsSuccess;
