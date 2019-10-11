import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/appState';
import { productReducers } from './product.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  products: productReducers,
};
