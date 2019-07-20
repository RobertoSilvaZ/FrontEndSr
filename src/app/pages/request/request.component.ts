import { Component, OnInit, Renderer2 } from '@angular/core';
import { RequestService, IRequest } from '../../services/request/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  loaded = false;
  requests: IRequest[] = [];
  requestsTmp: IRequest[] = [];

  constructor(private _RequestService: RequestService, private render: Renderer2) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    /* Get list request */
    this.loaded = false;
    this._RequestService.getRequests()
      .subscribe((resp: IRequest[]) => {
        this.requests = resp;
        this.requestsTmp = resp;
        this.loaded = true;
        this.filterRequest();
      },
        error => {
          console.error('Error en getRequests: ', error);
          this.requests = [];
          this.requestsTmp = [];
          this.loaded = true;
        });
  }

  filterRequest() {
    let status: String = '';
    const classArr: any = document.querySelectorAll('.nav-link');
    classArr.forEach(element => {
      this.render.listen(element, 'click', (target) => {
        classArr.forEach(el => {
          this.render.removeClass(el, 'active');
        });
        /* Filter */
        status = target.target.dataset.filter;
        if (status !== '') {
          this.requests = this.requestsTmp.filter((data) => {
            return data.status[0].slug === status;
          });
        } else {
          this.getRequests();
        }
        this.render.addClass(element, 'active');
      });
    });

  }

}
