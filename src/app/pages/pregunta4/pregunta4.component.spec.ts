import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta4Component } from './pregunta4.component';

describe('Pregunta4Component', () => {
  let component: Pregunta4Component;
  let fixture: ComponentFixture<Pregunta4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pregunta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
