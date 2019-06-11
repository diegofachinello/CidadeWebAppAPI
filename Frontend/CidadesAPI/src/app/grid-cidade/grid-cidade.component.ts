import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-cidade',
  templateUrl: './grid-cidade.component.html',
  styleUrls: ['./grid-cidade.component.css']
})
export class GridCidadeComponent implements OnInit {

  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  
  @Input() cidadeData: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }
    
  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);

  }

  public newRecord() {
    this.newClicked.emit();
  }

}
