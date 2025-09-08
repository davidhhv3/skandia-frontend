import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product-service';
import { Product } from './models/Product';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

    const mockProducts: Product[] = [
    {
      nameProduct: 'Cuenta de Ahorros',
      numberProduct: '123456',
      balanceProduct: '100000',
      detaildProduct: 'Cuenta en pesos colombianos'
    },
    {
      nameProduct: 'Tarjeta de Crédito',
      numberProduct: '987654',
      balanceProduct: '5000',
      detaildProduct: 'Tarjeta MasterCard'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products from API', () => {
    service.getProducts().subscribe((response) => {
      expect(response.listCard.length).toBe(2);
      expect(response.listCard).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');

    req.flush({ listCard: mockProducts });
  });


});
