import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {IProduct} from '../models/product';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:61885/';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<IProduct[]> {
    // tslint:disable-next-line: no-debugger
    debugger;
    return this.http.get<IProduct[]>('api/product/getproducts');
  }
}
