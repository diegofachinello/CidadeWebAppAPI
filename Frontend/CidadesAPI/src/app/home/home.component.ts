import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service'
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cidadeData: Array<any>;
  public currentCidade: any;
  
  constructor(private cidadeService: CidadeService) {
    cidadeService.get().subscribe((data: any) => this.cidadeData = data);
    this.currentCidade = this.setInitialValuesForCidadeData();
   }

  ngOnInit() {
  }

   private setInitialValuesForCidadeData () {
    return {
      id: undefined,
      idCidade: 0,
      nome: '',
      estado: ''
    }
  }

public createOrUpdateCidade = function(cidade: any) {
    let cidadeWithId;
    cidadeWithId = _.find(this.cidadeData, (el => el.id === cidade.id));

    if (cidadeWithId) {
      const updateIndex = _.findIndex(this.cidadeData, {id: cidadeWithId.id});
      this.cidadeService.update(cidade).subscribe(
        cidadeRecord => this.cidadeData.splice(updateIndex, 1, cidade)
      );
    } else {
      this.cidadeService.add(cidade).subscribe(
        cidadeRecord => this.cidadeData.push(cidade)
      );
    }

    this.currentCidade = this.setInitialValuesForCidadeData();
  };

  public editClicked = function(record) {
    this.currentCidade = record;
  };

  public newClicked = function() {
    this.currentCidade = this.setInitialValuesForCidadeDataData(); 
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.cidadeData, {id: record.id});
    this.cidadeService.remove(record).subscribe(
      result => this.cidadeData.splice(deleteIndex, 1)
    );
  }
}
