import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from 'app/app.api';
import { ErrorHandler } from 'app/app.error-handler';
import { Observable } from 'rxjs/Observable';

import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {


  constructor(private http: Http){

  }

  restaurants():  Observable<Restaurant[]>{
    return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json() )
    .catch(ErrorHandler.handlerError)
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json() )
    .catch(ErrorHandler.handlerError)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json() )
    .catch(ErrorHandler.handlerError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(response => response.json() )
    .catch(ErrorHandler.handlerError)
  }

}
