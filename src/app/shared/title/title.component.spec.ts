import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from '../../shared/title/title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  let h1:        HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  TitleComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(()  => {
    component.titlePage = '';
    fixture.detectChanges();
  });

  it('Component created', () => {
    expect(component).toBeTruthy();
  });

  it('Page title works', () => {
      h1 = fixture.nativeElement.querySelector('h1');
      component.titlePage = 'Test';
      fixture.detectChanges();
      expect(h1.textContent).toContain('Test');
    });
});


