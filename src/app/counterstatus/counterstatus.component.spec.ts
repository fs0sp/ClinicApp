import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterstatusComponent } from './counterstatus.component';

describe('CounterstatusComponent', () => {
  let component: CounterstatusComponent;
  let fixture: ComponentFixture<CounterstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterstatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
