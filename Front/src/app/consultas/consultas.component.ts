import { Component, OnInit } from '@angular/core';
import { Page } from '../Model/Page';
import { Router } from '@angular/router';
import { ConsultasService } from './consultas.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  page = new Page();
  rows: Object[] = [];
  selected: any[] = [];

  constructor(private router: Router, private service: ConsultasService) { }

  ngOnInit(): void {
    this.carregaTabela();
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.carregaTabela();
  }

  incluir() {
    this.router.navigate(['incluir']);
  }

  editar() {
    this.router.navigate(['editar/', this.selected[0].id]);
  }
  apagar() {
    swal.fire({
      title: 'Excluir Consulta?',
      text: "Tem certeza que deseja remover a consulta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        this.service.apagarConsulta(this.selected[0].id).subscribe(res => {
          swal.fire(
            'Removida!',
            'Consultada excluída com sucesso!',
            'success'
          )
          this.carregaTabela();
        })
      }
    })
  }
  carregaTabela() {
    this.service.obterListaConsulta(this.page).subscribe(res => {
      this.page.totalElements = res.data.quantidade;
      this.rows = res.data.dados;
    })
  }

  filtro(event) {
    if (!event.target.value) {
      this.page.descricao = '';
      this.page.pageNumber = 0;
      this.carregaTabela();
    }
    if (event.keyCode == 13) {
      this.page.descricao = event.target.value;
      this.page.pageNumber = 0;
      this.carregaTabela();
    }
  }
}
