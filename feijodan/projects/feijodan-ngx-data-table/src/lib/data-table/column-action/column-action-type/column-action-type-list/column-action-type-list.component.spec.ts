import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnActionTypeListComponent } from './column-action-type-list.component';

describe('ColumnActionTypeListComponent', () => {
  let component: ColumnActionTypeListComponent;
  let fixture: ComponentFixture<ColumnActionTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnActionTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnActionTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
