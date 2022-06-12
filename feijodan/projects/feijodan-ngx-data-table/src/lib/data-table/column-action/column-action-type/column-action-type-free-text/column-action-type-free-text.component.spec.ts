import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnActionTypeFreeTextComponent } from './column-action-type-free-text.component';

describe('ColumnActionTypeFreeTextComponent', () => {
  let component: ColumnActionTypeFreeTextComponent;
  let fixture: ComponentFixture<ColumnActionTypeFreeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnActionTypeFreeTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnActionTypeFreeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
