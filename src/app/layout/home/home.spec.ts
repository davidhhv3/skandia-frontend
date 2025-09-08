import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidebarCollapsed when toggleSidebar is called', () => {
    // valor inicial
    expect(component.sidebarCollapsed).toBeFalse();

    // primer toggle → debe quedar en true
    component.toggleSidebar();
    expect(component.sidebarCollapsed).toBeTrue();

    // segundo toggle → debe volver a false
    component.toggleSidebar();
    expect(component.sidebarCollapsed).toBeFalse();
  });


});
