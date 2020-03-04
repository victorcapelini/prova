import { Component, OnInit } from '@angular/core';
import { Page } from '../Model/Page';
import { Router } from '@angular/router';
import { ConsultasService } from './consultas.service';

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

  onSelect({ selected }) {
    console.log(this.selected[0].id)
  }
}
