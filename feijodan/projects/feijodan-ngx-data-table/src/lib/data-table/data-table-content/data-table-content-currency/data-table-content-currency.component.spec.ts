import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableContentCurrencyComponent } from './data-table-content-currency.component';

describe('DataTableContentCurrencyComponent', () => {
  let component: DataTableContentCurrencyComponent;
  let fixture: ComponentFixture<DataTableContentCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableContentCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableContentCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
