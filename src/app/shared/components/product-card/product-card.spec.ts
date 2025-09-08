import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card';
import { Product } from '../../../core/services/models/Product';
import { By } from '@angular/platform-browser';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  const mockProduct: Product = {
    nameProduct: 'Cuenta de Ahorros',
    numberProduct: '123456',
    balanceProduct: '100000',
    detaildProduct: 'Cuenta en pesos colombianos'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance; 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should accept product input', () => {//**************** */
    component.product = mockProduct;
    expect(component.product).toEqual(mockProduct);
  });

  it('should render product data in template', () => {
    component.product = mockProduct;
    fixture.detectChanges();

    // Nombre del producto
    const name = fixture.debugElement.query(By.css('.product-name')).nativeElement;
    expect(name.textContent).toContain(mockProduct.nameProduct);

    // Número de producto
    const number = fixture.debugElement.query(By.css('.product-number')).nativeElement;
    expect(number.textContent).toContain(mockProduct.numberProduct);

    // Balance
    const balance = fixture.debugElement.query(By.css('.amount')).nativeElement;
    expect(balance.textContent).toContain(mockProduct.balanceProduct);

    // Descripción en el footer
    const description = fixture.debugElement.query(By.css('.desciption-bottom')).nativeElement;
    expect(description.textContent).toContain(mockProduct.detaildProduct);
  });

});
