import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { RequestComponent } from './request.component';
import { TitleComponent } from '../../shared/title/title.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { RequestService, IRequest } from '../../services/request/request.service';

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequestComponent, TitleComponent, MenuComponent],
      providers: [
        RequestService
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component created', () => {
    expect(component).toBeTruthy();
  });

  it('Service Request working', inject([RequestService], (service: RequestService) => {
    expect(service).toBeTruthy();
  }));

  it('Function get requests working', inject([RequestService], (service: RequestService) => {
    expect(service.getRequests).toBeTruthy();
  }));

  it('Data working', async(() => {
    spyOn(component, 'getRequests');
    component.getRequests();

    fixture.whenStable().then(() => { 
      expect(component.requests.length).toBeGreaterThan(1);
    });
  }));

  it('Function filter working', () => {
    expect(component.filterRequest).toBeTruthy();
  });

  it('Event click filter working', async(() => {
    spyOn(component, 'filterRequest');

    const button = fixture.debugElement.nativeElement.querySelector('a.nav-link[data-filter="pending"]');

    button.click();
    component.filterRequest();

    fixture.whenStable().then(() => {
      expect(component.requests.length).toBeGreaterThan(1);
    });
  }));
});
