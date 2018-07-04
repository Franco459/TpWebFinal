import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraVehiculosComponent } from './muestra-vehiculos.component';

describe('MuestraVehiculosComponent', () => {
  let component: MuestraVehiculosComponent;
  let fixture: ComponentFixture<MuestraVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
