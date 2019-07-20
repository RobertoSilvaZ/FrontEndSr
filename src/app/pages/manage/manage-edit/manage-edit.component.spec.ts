import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { ManageEditComponent } from './manage-edit.component';
import { TitleComponent } from '../../../shared/title/title.component';
import { MenuComponent } from '../../../shared/menu/menu.component';

describe('ManageEditComponent', () => {
  let component: ManageEditComponent;
  let fixture: ComponentFixture<ManageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEditComponent, TitleComponent, MenuComponent ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component created', () => {
    expect(component).toBeTruthy();
  });

  it('Function add possible value working', () => {
    expect(component.addValue).toBeTruthy();
  }); 

  it('Event adding value working', () => {
    component.possible_value = 'value';
    component.possible_description = 'description';
    expect(component.addValue()).toBeTruthy();
  });

  it('Function onSubmit form working', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  it('Event click add possible value working', async(() => {
    spyOn(component, 'addValue');

    const button = fixture.debugElement.nativeElement.querySelector('a#btn_addValue');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.addValue).toHaveBeenCalled();
    });
  }));
});
