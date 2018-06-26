import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpfConfigComponent } from './wpf-config.component';

describe('WpfConfigComponent', () => {
  let component: WpfConfigComponent;
  let fixture: ComponentFixture<WpfConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpfConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpfConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
