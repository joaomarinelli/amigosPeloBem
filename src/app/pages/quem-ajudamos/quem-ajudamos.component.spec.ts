import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemAjudamosComponent } from './quem-ajudamos.component';

describe('QuemAjudamosComponent', () => {
  let component: QuemAjudamosComponent;
  let fixture: ComponentFixture<QuemAjudamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuemAjudamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuemAjudamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
