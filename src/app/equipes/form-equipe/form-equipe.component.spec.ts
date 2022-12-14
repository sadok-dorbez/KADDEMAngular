import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquipeComponent } from './form-equipe.component';

describe('FormEquipeComponent', () => {
  let component: FormEquipeComponent;
  let fixture: ComponentFixture<FormEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
