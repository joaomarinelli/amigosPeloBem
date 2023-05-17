import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicoesAjudadasComponent } from './instituicoes-ajudadas.component';

describe('InstituicoesAjudadasComponent', () => {
  let component: InstituicoesAjudadasComponent;
  let fixture: ComponentFixture<InstituicoesAjudadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituicoesAjudadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicoesAjudadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
