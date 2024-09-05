import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadInputboxComponent } from './typeahead-inputbox.component';

describe('TypeaheadInputboxComponent', () => {
  let component: TypeaheadInputboxComponent;
  let fixture: ComponentFixture<TypeaheadInputboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeaheadInputboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeaheadInputboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
