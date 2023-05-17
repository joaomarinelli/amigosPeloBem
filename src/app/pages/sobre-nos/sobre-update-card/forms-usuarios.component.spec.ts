import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreUpdateCardComponent } from './forms-usuarios.component';

describe('SobreUpdateCardComponent', () => {
  let component: SobreUpdateCardComponent;
  let fixture: ComponentFixture<SobreUpdateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreUpdateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreUpdateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
