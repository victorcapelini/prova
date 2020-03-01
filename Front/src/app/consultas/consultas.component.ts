import { Component, OnInit } from '@angular/core';
import { Page } from '../Models/Page';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  page = new Page();
  rows: Object[] = [];

  base: Object[] = [{ Name: 'Victor', Gender: 'Teste', Company: 'Compania' },
  { Name: 'Victor1', Gender: 'Teste1', Company: 'Compania1' },
  { Name: 'Victor2', Gender: 'Teste2', Company: 'Compania2' },
  { Name: 'Victor3', Gender: 'Teste', Company: 'Compania' },
  { Name: 'Victor11', Gender: 'Teste1', Company: 'Compania1' },
  { Name: 'Victor21', Gender: 'Teste2', Company: 'Compania2' },
  { Name: 'Victor31', Gender: 'Teste', Company: 'Compania' },
  { Name: 'Victor12', Gender: 'Teste1', Company: 'Compania1' },
  { Name: 'Victor22', Gender: 'Teste2', Company: 'Compania2' },
  { Name: 'Victor32', Gender: 'Teste', Company: 'Compania' },
  { Name: 'Victor13', Gender: 'Teste1', Company: 'Compania1' },
  { Name: 'Victor23', Gender: 'Teste2', Company: 'Compania2' },
  { Name: 'Victor33', Gender: 'Teste', Company: 'Compania' },
  { Name: 'Victor14', Gender: 'Teste1', Company: 'Compania1' },
  { Name: 'Victor24', Gender: 'Teste2', Company: 'Compania2' },]


  constructor() { }

  ngOnInit(): void {
    this.page.totalElements = this.base.length;
    this.page.totalPages = this.page.totalElements % this.page.size;
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo) {

    console.log(pageInfo);
    this.page.totalElements = this.base.length;
    this.page.totalPages = this.page.totalElements % this.page.size;
    this.page.pageNumber = pageInfo.offset;

    this.rows = this.base.slice((this.page.pageNumber * this.page.size), ((this.page.pageNumber + 1) * this.page.size))
  }

}
