import {IProduct} from '../../models/product';

export interface IProductState {
  Products: IProduct[];
}

export const initialProductState: IProductState = {
  Products: null
};
