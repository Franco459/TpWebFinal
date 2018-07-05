import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusuariosComponent } from './ausuarios.component';

describe('AusuariosComponent', () => {
  let component: AusuariosComponent;
  let fixture: ComponentFixture<AusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
