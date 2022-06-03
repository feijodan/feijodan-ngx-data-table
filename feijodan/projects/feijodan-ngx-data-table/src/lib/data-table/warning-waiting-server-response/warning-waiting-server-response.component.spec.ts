import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningWaitingServerResponseComponent } from './warning-waiting-server-response.component';

describe('WarningWaitingServerResponseComponent', () => {
  let component: WarningWaitingServerResponseComponent;
  let fixture: ComponentFixture<WarningWaitingServerResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningWaitingServerResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningWaitingServerResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
