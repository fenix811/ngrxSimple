import {
  ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
import { initialProductState, IProductState } from '../state/product.state';
import {ProductActions, ProductActionTypes} from '../actions/product.actions';

export const productReducers = (
  state = initialProductState,
  action: ProductActions
): IProductState => {
  switch (action.type) {
    // case ProductActionTypes.GetUsersSuccess: {
    //   return {
    //     ...state,
    //     products: action.payload
    //   };
    // }

    default:
      return state;
  }
};
