import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnActionComponent } from './column-action.component';

describe('ColumnActionComponent', () => {
  let component: ColumnActionComponent;
  let fixture: ComponentFixture<ColumnActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
