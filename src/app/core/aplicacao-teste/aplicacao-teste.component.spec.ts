import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacaoTesteComponent } from './aplicacao-teste.component';

describe('AplicacaoTesteComponent', () => {
  let component: AplicacaoTesteComponent;
  let fixture: ComponentFixture<AplicacaoTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplicacaoTesteComponent]
    });
    fixture = TestBed.createComponent(AplicacaoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
