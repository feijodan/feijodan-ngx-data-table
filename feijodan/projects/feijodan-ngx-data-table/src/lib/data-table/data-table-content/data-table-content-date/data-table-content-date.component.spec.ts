import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableContentDateComponent } from './data-table-content-date.component';

describe('DataTableContentDateComponent', () => {
  let component: DataTableContentDateComponent;
  let fixture: ComponentFixture<DataTableContentDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableContentDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableContentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
