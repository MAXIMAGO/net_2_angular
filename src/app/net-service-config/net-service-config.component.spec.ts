import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetServiceConfigComponent } from './net-service-config.component';

describe('NetServiceConfigComponent', () => {
  let component: NetServiceConfigComponent;
  let fixture: ComponentFixture<NetServiceConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetServiceConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetServiceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
