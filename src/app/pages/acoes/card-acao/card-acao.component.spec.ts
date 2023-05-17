import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAcaoComponent } from './card-acao.component';

describe('CardAcaoComponent', () => {
  let component: CardAcaoComponent;
  let fixture: ComponentFixture<CardAcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
