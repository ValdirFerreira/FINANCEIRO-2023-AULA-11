import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaComponent } from './sistema.component';

describe('SistemaComponent', () => {
  let component: SistemaComponent;
  let fixture: ComponentFixture<SistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
