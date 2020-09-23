import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIconsTableComponent } from './weather-icons-table.component';

describe('WeatherIconsTableComponent', () => {
  let component: WeatherIconsTableComponent;
  let fixture: ComponentFixture<WeatherIconsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherIconsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIconsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
