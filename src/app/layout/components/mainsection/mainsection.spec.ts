import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainsection } from './mainsection';

describe('Mainsection', () => {
  let component: Mainsection;
  let fixture: ComponentFixture<Mainsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
