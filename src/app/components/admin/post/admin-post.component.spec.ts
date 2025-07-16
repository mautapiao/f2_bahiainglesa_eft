import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminPostComponent } from './admin-post.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminPostComponent', () => {
  let component: AdminPostComponent;
  let fixture: ComponentFixture<AdminPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPostComponent, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});
});
