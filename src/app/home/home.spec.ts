// src/app/home/home.spec.ts

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from "./home"; // 🟢 ВИПРАВЛЕНО

describe('HomeComponent', () => {
  let component: HomeComponent; // 🟢 ВИПРАВЛЕНО
  let fixture: ComponentFixture<HomeComponent>; // 🟢 ВИПРАВЛЕНО

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent] // 🟢 ВИПРАВЛЕНО
    })
      .compileComponents();
  });

  fixture = TestBed.createComponent(HomeComponent); // 🟢 ВИПРАВЛЕНО
  component = fixture.componentInstance;
  fixture.detectChanges();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
