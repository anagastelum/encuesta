import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta8Component } from './pregunta8.component';

describe('Pregunta8Component', () => {
  let component: Pregunta8Component;
  let fixture: ComponentFixture<Pregunta8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pregunta8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pregunta8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
