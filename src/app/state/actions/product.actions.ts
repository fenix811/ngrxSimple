import { Action } from '@ngrx/store';
import {IProduct} from '../../models/product';
export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  LoadProductsSuccess = '[Product] Load Products Success',
  SelectProduct = '[Product] Select Product',
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LoadProductsSuccess;
  constructor(public payload: IProduct[]) {}
}

export class SelectProduct implements Action {
  readonly type = ProductActionTypes.SelectProduct;
  constructor(productId: number) {}
}

export type ProductActions = LoadProducts | LoadProductsSuccess | SelectProduct;
