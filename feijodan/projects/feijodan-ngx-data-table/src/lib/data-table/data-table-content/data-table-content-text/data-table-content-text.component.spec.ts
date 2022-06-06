import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableContentTextComponent } from './data-table-content-text.component';

describe('DataTableContentTextComponent', () => {
  let component: DataTableContentTextComponent;
  let fixture: ComponentFixture<DataTableContentTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableContentTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableContentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
