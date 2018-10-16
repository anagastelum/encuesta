import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta10Component } from './pregunta10.component';

describe('Pregunta10Component', () => {
  let component: Pregunta10Component;
  let fixture: ComponentFixture<Pregunta10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pregunta10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
