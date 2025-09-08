import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsContainer } from './cards-container';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CardsContainer', () => {
  let component: CardsContainer;
  let fixture: ComponentFixture<CardsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsContainer,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
