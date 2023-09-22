import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Product} from './product.model';
import { Observable } from 'rxjs'; // Importe Observable




@Injectable({ 
  providedIn: 'root'
})
export class ProductService {


  baseUrl = "http://localhost:3001/products"


  constructor(private snackBar: MatSnackBar, private http:HttpClient,) { }

  showMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }

  create(product: Product): Observable<Product> { // Ele será o responsável por inserir um novo produto lá no backend
    return this.http.post<Product>(this.baseUrl, product)  // o post é para inserir um novo produto no backend, sendo chamado de requisição tipo post
  } 

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url)
  }

}
