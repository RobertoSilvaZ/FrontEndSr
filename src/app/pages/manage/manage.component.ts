import { Component, OnInit } from '@angular/core';
import { IUser, UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  user: any;
  constructor(private _UserService: UserService) { }

  ngOnInit() {
    this.user = this._UserService.info();
  }

}
