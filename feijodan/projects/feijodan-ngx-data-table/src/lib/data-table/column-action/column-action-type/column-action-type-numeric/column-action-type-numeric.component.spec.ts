import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnActionTypeNumericComponent } from './column-action-type-numeric.component';

describe('ColumnActionTypeNumericComponent', () => {
  let component: ColumnActionTypeNumericComponent;
  let fixture: ComponentFixture<ColumnActionTypeNumericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnActionTypeNumericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnActionTypeNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
