import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenueComponent } from './main-menue.component';

describe('MainMenueComponent', () => {
  let component: MainMenueComponent;
  let fixture: ComponentFixture<MainMenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
