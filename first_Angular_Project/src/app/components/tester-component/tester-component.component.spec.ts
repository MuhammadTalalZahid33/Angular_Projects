import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterComponentComponent } from './tester-component.component';

describe('TesterComponentComponent', () => {
  let component: TesterComponentComponent;
  let fixture: ComponentFixture<TesterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
