import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminPlansComponent } from './admin-plans.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminPlansComponent', () => {
  let component: AdminPlansComponent;
  let fixture: ComponentFixture<AdminPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPlansComponent, RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});

});
