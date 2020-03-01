import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirConsultaComponent } from './incluir-consulta.component';

describe('IncluirConsultaComponent', () => {
  let component: IncluirConsultaComponent;
  let fixture: ComponentFixture<IncluirConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
