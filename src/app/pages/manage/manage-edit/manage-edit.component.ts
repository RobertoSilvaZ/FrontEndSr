import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from '../../../services/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-edit',
  templateUrl: './manage-edit.component.html',
  styleUrls: ['./manage-edit.component.scss']
})
export class ManageEditComponent implements OnInit {
  user: any;
  possible_value: String = '';
  possible_description: String = '';
  validTable: Boolean = true;
  tableBody: any;
  constructor(private _UserService: UserService) { }

  ngOnInit() {
    this.user = this._UserService.info();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }
    this._UserService.save(this.user);
  }

  addValue() {
    this.validTable = false;
    if (this.possible_value.length > 0 && this.possible_description.length > 0) {
      this.user['possible'].push({
        value: this.possible_value,
        description: this.possible_description
      });
      this.possible_value = '';
      this.possible_description = '';
      this.validTable = true;
    }
    return this.validTable;
  }
}