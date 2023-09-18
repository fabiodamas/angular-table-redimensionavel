import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {'Código': 1, 'Nome da permissão': 'total'      , Unidade: '0 - TODOS'                              , 'Tipo de Prontuário': '0 - TODOS'                        , 'Tipo Documental':'0 - TODOS' , 'Nível':'view', 'Ações':'---------------'},
  {'Código': 2, 'Nome da permissão': 'tudo010C'   , Unidade: '010C - GERENCIA DE FINANCAS'            , 'Tipo de Prontuário': '0 - TODOS'                        , 'Tipo Documental':'0 - TODOS' , 'Nível':'delete', 'Ações':'---------------'},
  {'Código': 3, 'Nome da permissão': 'permissao03', Unidade: '010C - GERENCIA DE FINANCAS'            , 'Tipo de Prontuário': '0 - TODOS'                        , 'Tipo Documental':'0 - TODOS' , 'Nível':'update', 'Ações':'---------------'},
  {'Código': 4, 'Nome da permissão': 'permissao04', Unidade: '010C - GERENCIA DE FINANCAS'            , 'Tipo de Prontuário': '0 - TODOS'                        , 'Tipo Documental':'0 - TODOS' , 'Nível':'view', 'Ações':'---------------'},
  {'Código': 5, 'Nome da permissão': 'permissao05', Unidade: '011C - GERENCIA DE MATERIAIS E SERVICOS', 'Tipo de Prontuário': '2 - Diploma de Ensino Fundamental', 'Tipo Documental':'2 - Diploma de Ensino Fundamental' , 'Nível':'view', 'Ações':'---------------'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'resizable-table',
  styleUrls: ['resizable-table.component.scss'],
  templateUrl: 'resizable-table.component.html',
})
export class ResizableTableComponent {
  displayedColumns: string[] = ['Código', 'Nome da permissão', 'Unidade', 'Tipo de Prontuário','Tipo Documental','Nível', 'Ações' ];  
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */