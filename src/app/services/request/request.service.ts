import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url = 'http://proyecto-prueba.com/RobertoSilva/request.json';
  constructor(private http: HttpClient) { }

  getRequests(): Observable<IRequest[]>{
    return this.http
      .get(this.url)
      .pipe(
        map( resp => this.createData(resp))
      );
  }

  createData(obj: object) {
    const data: IRequest[] = [];
    if (obj === null) { return []; }
    Object.keys(obj).forEach(key => {
      const reg: IRequest = obj[key];
      data.push(reg);
    });
    return data;
  }
}
export interface IRequest {
  create_at: string;
  reason: string;
  status: [{
    slug: string,
    name: string
  }];
}
