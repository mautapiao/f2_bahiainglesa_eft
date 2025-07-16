import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminAdsComponent } from './admin-ads.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminAdsComponent', () => {
  let component: AdminAdsComponent;
  let fixture: ComponentFixture<AdminAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdsComponent, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});
});
