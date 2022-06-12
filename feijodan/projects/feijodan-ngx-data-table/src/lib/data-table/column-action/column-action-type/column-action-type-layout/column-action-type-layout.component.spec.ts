import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnActionTypeLayoutComponent } from './column-action-type-layout.component';

describe('ColumnActionTypeLayoutComponent', () => {
  let component: ColumnActionTypeLayoutComponent;
  let fixture: ComponentFixture<ColumnActionTypeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnActionTypeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnActionTypeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
