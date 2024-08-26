import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { category } from './types/category';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
http=inject(HttpClient)
  constructor() { }
  getCategoryList(){
      return this.http.get<category[]>(environment.apiUrl+'/api/Category')
  }
}
