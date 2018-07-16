import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePjComponent } from './fiche-pj.component';

describe('FichePjComponent', () => {
  let component: FichePjComponent;
  let fixture: ComponentFixture<FichePjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
