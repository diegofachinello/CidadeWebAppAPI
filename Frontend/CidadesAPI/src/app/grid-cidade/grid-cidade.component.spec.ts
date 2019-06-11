import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCidadeComponent } from './grid-cidade.component';

describe('GridCidadeComponent', () => {
  let component: GridCidadeComponent;
  let fixture: ComponentFixture<GridCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
