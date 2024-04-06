import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
HttpClient



@Injectable({
  providedIn: 'root'
})
export class ProductsService  {

  constructor(public httpClient:HttpClient) { }

  
    getProducts(){
     return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
    }  
  }

  

