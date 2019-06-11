import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update-cidade',
  templateUrl: './add-or-update-cidade.component.html',
  styleUrls: ['./add-or-update-cidade.component.css']
})
export class AddOrUpdateCidadeComponent implements OnInit {

  @Output() cidadeCreated = new EventEmitter<any>();
  @Input() cidadeInfo: any;

  public buttonText = 'Salvar';

  ngOnInit() {
  }

  constructor() { 
    this.clearCidadeInfo();
    console.log(this.cidadeInfo.id);
  }

  private clearCidadeInfo = function() {
    // Cria um usuário vazio
    this.cidadeInfo = {
      id: undefined,
      idCidade: 0,
      nome: '',
      estado: ''
    };
  };

  public addOrUpdateCidade = function(event) {
    this.cidadeCreated.emit(this.cidadeInfo);
    this.clearCidadeInfo();
  };
}
