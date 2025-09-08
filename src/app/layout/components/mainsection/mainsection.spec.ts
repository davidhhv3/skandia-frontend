import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mainsection } from './mainsection';
import { ProductService } from '../../../core/services/product-service';

class MockProductService {
  getProducts() {
    return {
      subscribe: (observer: any) => {
        observer.next({ listCard: [] });
      }
    };
  }
}

describe('Mainsection', () => {
  let component: Mainsection;
  let fixture: ComponentFixture<Mainsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainsection],
      providers: [
        { provide: ProductService, useClass: MockProductService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have collapsed default to false', () => {
    expect(component.collapsed).toBeFalse();
  });

  it('should accept collapsed as true when passed from parent', () => {
    // Act: simular que el padre pasa collapsed=true
    component.collapsed = true;
    fixture.detectChanges();

    // Assert
    expect(component.collapsed).toBeTrue();
  });

});
