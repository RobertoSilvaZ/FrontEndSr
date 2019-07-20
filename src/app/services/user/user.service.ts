import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  save(user: any) {
    localStorage.setItem('__USERAvantica', JSON.stringify(user));
    this.router.navigate(['/manage']);
  }

  info() {
    let info: IUser[];
    if (!localStorage.getItem('__USERAvantica')) {
      const userDefault: IUser[] = [{
        'user_id': '0001',
        'description': 'Contains the primary key used to identify a user of the system',
        'type': 3,
        'personal': false,
        'possible': [{
          'value': '100',
          'description': 'Description'
        }]
      }];
      this.save(userDefault[0]);
    }

    info = JSON.parse(localStorage.getItem('__USERAvantica'));
    return info;
  }
}

export interface IUser {
  user_id?: string;
  description?: string;
  type?: number;
  personal?: boolean;
  possible?: [{
    value: string,
    description: string
  }];
}
