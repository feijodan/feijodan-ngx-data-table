import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableContentEditComponent } from './data-table-content-edit.component';

describe('DataTableContentEditComponent', () => {
  let component: DataTableContentEditComponent;
  let fixture: ComponentFixture<DataTableContentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableContentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableContentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
