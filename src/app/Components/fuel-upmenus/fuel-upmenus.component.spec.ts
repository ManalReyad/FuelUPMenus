import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelUPMenusComponent } from './fuel-upmenus.component';

describe('FuelUPMenusComponent', () => {
  let component: FuelUPMenusComponent;
  let fixture: ComponentFixture<FuelUPMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelUPMenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelUPMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
