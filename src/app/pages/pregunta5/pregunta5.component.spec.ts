import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta5Component } from './pregunta5.component';

describe('Pregunta5Component', () => {
  let component: Pregunta5Component;
  let fixture: ComponentFixture<Pregunta5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pregunta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
