import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should emit menuToggle event when onMenuClick is called', () => {
    // Arrange
    spyOn(component.menuToggle, 'emit');

    // Act
    component.onMenuClick();

    // Assert
    expect(component.menuToggle.emit).toHaveBeenCalled();
  });

  fit('should notify subscribers when menuToggle is emitted', (done) => {
    // Arrange: suscribirse al evento
    component.menuToggle.subscribe(() => {
      // Assert: si llega aquí, el evento fue emitido
      expect(true).toBeTrue();
      done(); // indicamos que la prueba terminó
    });

    // Act
    component.onMenuClick();
  });


});
