import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciFiComponent } from './sci-fi.component';

describe('SciFiComponent', () => {
  let component: SciFiComponent;
  let fixture: ComponentFixture<SciFiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciFiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
