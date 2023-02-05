import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaMarianaComponent } from './para-mariana.component';

describe('ParaMarianaComponent', () => {
  let component: ParaMarianaComponent;
  let fixture: ComponentFixture<ParaMarianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaMarianaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParaMarianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
