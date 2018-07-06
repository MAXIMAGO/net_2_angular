import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactConfigComponent } from './react-config.component';

describe('ReactConfigComponent', () => {
  let component: ReactConfigComponent;
  let fixture: ComponentFixture<ReactConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
