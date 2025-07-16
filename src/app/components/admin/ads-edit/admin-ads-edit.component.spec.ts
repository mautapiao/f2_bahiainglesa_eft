import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminAdsEditComponent } from './admin-ads-edit.component';

describe('AdminAdsEditComponent', () => {
  let component: AdminAdsEditComponent;
  let fixture: ComponentFixture<AdminAdsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAdsEditComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/** test para que no se visualice debe ser creado */
 it('', () => {
  expect(component).toBeTruthy();
});
});
