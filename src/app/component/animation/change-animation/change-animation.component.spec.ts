import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAnimationComponent } from './change-animation.component';

describe('ChangeAnimationComponent', () => {
  let component: ChangeAnimationComponent;
  let fixture: ComponentFixture<ChangeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
