import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta9Component } from './pregunta9.component';

describe('Pregunta9Component', () => {
  let component: Pregunta9Component;
  let fixture: ComponentFixture<Pregunta9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pregunta9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
