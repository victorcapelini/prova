import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  id;

  constructor(private router: Router, private service: ConsultasService) {  }

  ngOnInit(): void {
  }

  salvar(consulta:ConsultaModel) {
    this.service.editarConsulta(consulta).subscribe(() => {
      this.router.navigate(['']);
    })
  }

  voltar() {
    this.router.navigate(['']);
  }
}
