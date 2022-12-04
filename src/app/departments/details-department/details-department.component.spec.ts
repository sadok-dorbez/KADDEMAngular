import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDepartmentComponent } from './details-department.component';

describe('DetailsDepartmentComponent', () => {
  let component: DetailsDepartmentComponent;
  let fixture: ComponentFixture<DetailsDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
