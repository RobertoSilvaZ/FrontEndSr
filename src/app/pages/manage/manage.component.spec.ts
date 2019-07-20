import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ManageComponent } from './manage.component';
import { TitleComponent } from '../../shared/title/title.component';
import { MenuComponent } from '../../shared/menu/menu.component';

describe('ManageComponent', () => {
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageComponent, TitleComponent, MenuComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component created', () => {
    expect(component).toBeTruthy();
  });
});
