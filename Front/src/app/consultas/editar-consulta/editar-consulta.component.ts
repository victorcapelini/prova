import { Component, OnInit } from '@angular/core';
import { ConsultaModel, ConsultaInterfaceToModel } from 'src/app/Model/ConsultaModel';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultasService } from '../consultas.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-editar-consulta',
  templateUrl: './editar-consulta.component.html',
  styleUrls: ['./editar-consulta.component.css']
})
export class EditarConsultaComponent implements OnInit {

  model = new ConsultaModel();
  id: string;

  constructor(private router: Router, private service: ConsultasService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.service.obterConsultaPorId(this.id).subscribe(res => {
      this.model = ConsultaInterfaceToModel(res.data)
    })
  }

  salvar(consulta: ConsultaModel) {
    this.service.editarConsulta(consulta).subscribe(() => {
      swal.fire(
        'Edição',
        'Consulta salva com sucesso!',
        'success'
      )
      this.router.navigate(['']);
    })
  }

  voltar() {
    this.router.navigate(['']);
  }

}
