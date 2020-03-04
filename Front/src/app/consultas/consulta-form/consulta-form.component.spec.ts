import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFormComponent } from './consulta-form.component';

describe('ConsultaFormComponent', () => {
  let component: ConsultaFormComponent;
  let fixture: ComponentFixture<ConsultaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
