import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorComponent } from './horror.component';

describe('HorrorComponent', () => {
  let component: HorrorComponent;
  let fixture: ComponentFixture<HorrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
