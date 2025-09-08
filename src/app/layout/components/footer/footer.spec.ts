import { ComponentFixture, TestBed } from '@angular/core/testing';


import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit("should get result",() =>{
    component.num1 = 3;
    component.num2 = 2;
    component.sumar();

    expect(component.result).toBe(5);
  })



});
