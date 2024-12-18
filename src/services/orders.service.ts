import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/Environment';
import { OrdersModel } from 'src/models/orders/OrdersModel';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  onGetAllOrders(): Observable<OrdersModel[]> {
    return this.httpClient.get<OrdersModel[]>(`${Environment.baseUrl}orders.json`);
  }

  onGenerateUniqueId(): number {
    return (Math.random() * 3 | 0);
  }
}
