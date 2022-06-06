import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnActionTypeBaseComponent } from './column-action-type-base.component';

describe('ColumnActionTypeBaseComponent', () => {
  let component: ColumnActionTypeBaseComponent;
  let fixture: ComponentFixture<ColumnActionTypeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnActionTypeBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnActionTypeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
