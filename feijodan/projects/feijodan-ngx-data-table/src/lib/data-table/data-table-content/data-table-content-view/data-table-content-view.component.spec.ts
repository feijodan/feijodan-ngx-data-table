import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableContentViewComponent } from './data-table-content-view.component';

describe('DataTableContentViewComponent', () => {
  let component: DataTableContentViewComponent;
  let fixture: ComponentFixture<DataTableContentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableContentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableContentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
