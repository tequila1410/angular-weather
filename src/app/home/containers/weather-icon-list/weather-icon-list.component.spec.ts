import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIconListComponent } from './weather-icon-list.component';

describe('WeatherIconListComponent', () => {
  let component: WeatherIconListComponent;
  let fixture: ComponentFixture<WeatherIconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherIconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
