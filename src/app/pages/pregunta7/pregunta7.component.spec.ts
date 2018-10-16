import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta7Component } from './pregunta7.component';

describe('Pregunta7Component', () => {
  let component: Pregunta7Component;
  let fixture: ComponentFixture<Pregunta7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pregunta7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
