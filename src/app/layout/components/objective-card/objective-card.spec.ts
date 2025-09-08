import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveCard } from './objective-card';

describe('ObjectiveCard', () => {
  let component: ObjectiveCard;
  let fixture: ComponentFixture<ObjectiveCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
