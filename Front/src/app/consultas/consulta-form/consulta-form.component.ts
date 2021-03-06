import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaModel } from 'src/app/Model/ConsultaModel';

@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.css']
})
export class ConsultaFormComponent implements OnInit {
  consultaForm: FormGroup;
  @Input() model = new ConsultaModel();

  @Output() back = new EventEmitter();
  @Output() saveForm = new EventEmitter<ConsultaModel>();

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.consultaForm = this.formBuilder.group({
      NomePaciente: ['', Validators.required],
      DataNascimento: ['', Validators.required],
      DataInicio: ['', Validators.required],
      DataFim: ['', Validators.required],
      Observacoes: ['', null]
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.model) {
      this.model = changes.model.currentValue;
    }
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
  salvar() {
    this.saveForm.emit(this.model);
  }

  voltar() {
    this.back.emit();
  }

}
