import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTesteComponent } from './pagina-teste.component';

describe('PaginaTesteComponent', () => {
  let component: PaginaTesteComponent;
  let fixture: ComponentFixture<PaginaTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
