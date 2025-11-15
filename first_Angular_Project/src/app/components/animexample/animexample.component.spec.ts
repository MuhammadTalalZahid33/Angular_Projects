import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimexampleComponent } from './animexample.component';

describe('AnimexampleComponent', () => {
  let component: AnimexampleComponent;
  let fixture: ComponentFixture<AnimexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
