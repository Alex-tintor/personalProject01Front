import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateComponent } from './page-create.component';

describe('PageCreateComponent', () => {
  let component: PageCreateComponent;
  let fixture: ComponentFixture<PageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
