import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateCidadeComponent } from './add-or-update-cidade.component';

describe('AddOrUpdateCidadeComponent', () => {
  let component: AddOrUpdateCidadeComponent;
  let fixture: ComponentFixture<AddOrUpdateCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
