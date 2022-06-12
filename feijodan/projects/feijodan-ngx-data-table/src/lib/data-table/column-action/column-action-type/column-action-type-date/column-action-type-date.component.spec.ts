import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnActionTypeDateComponent } from './column-action-type-date.component';

describe('ColumnActionTypeDateComponent', () => {
  let component: ColumnActionTypeDateComponent;
  let fixture: ComponentFixture<ColumnActionTypeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnActionTypeDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnActionTypeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
