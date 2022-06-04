import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableContentBooleanComponent } from './data-table-content-boolean.component';

describe('DataTableContentBooleanComponent', () => {
  let component: DataTableContentBooleanComponent;
  let fixture: ComponentFixture<DataTableContentBooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableContentBooleanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableContentBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
