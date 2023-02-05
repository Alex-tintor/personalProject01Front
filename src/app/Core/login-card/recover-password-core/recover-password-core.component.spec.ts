import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordCoreComponent } from './recover-password-core.component';

describe('RecoverPasswordCoreComponent', () => {
  let component: RecoverPasswordCoreComponent;
  let fixture: ComponentFixture<RecoverPasswordCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverPasswordCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
