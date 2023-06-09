import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosComponent } from './sobre-nos.component';

describe('QuemAjudamosComponent', () => {
  let component: SobreNosComponent;
  let fixture: ComponentFixture<SobreNosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreNosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
