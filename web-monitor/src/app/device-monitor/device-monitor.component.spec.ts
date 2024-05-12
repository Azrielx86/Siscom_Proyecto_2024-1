import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMonitorComponent } from './device-monitor.component';

describe('DeviceMonitorComponent', () => {
  let component: DeviceMonitorComponent;
  let fixture: ComponentFixture<DeviceMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
