import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaModel } from 'src/app/Model/ConsultaModel';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-incluir-consulta',
  templateUrl: './incluir-consulta.component.html',
  styleUrls: ['./incluir-consulta.component.css']
})
export class IncluirConsultaComponent implements OnInit {
  consultaForm: FormGroup;

  model = new ConsultaModel();

  constructor(private formBuilder: FormBuilder, private router: Router, private service:ConsultasService) { }

  ngOnInit(): void {
    this.consultaForm = this.formBuilder.group({
      NomePaciente: ['', Validators.required],
      DataNascimento: ['', Validators.required],
      DataInicio: ['', Validators.required],
      DataFim: ['', Validators.required],
      Observacoes: ['', null]
    })
  }

  salvar() {
    this.service.salvarConsulta(this.model).subscribe(res =>{
    })
  }

  voltar() {
    this.router.navigate(['']);
  }
}
