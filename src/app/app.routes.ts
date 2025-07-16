import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PlayasComponent } from './pages/playas/playas.component';
import { BienvenidosComponent } from './pages/bienvenidos/bienvenidos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ClientHomeComponent } from './components/client/home/client-home.component';
import { AdminHomeComponent } from './components/admin/home/admin-home.component';
import { AdscreateComponent } from './components/client/adscreate/adscreate.component';
import { AvailablePlansComponent } from './components/client/available-plans/available-plans.component';
import { MyAdsComponent } from './components/client/my-ads/my-ads.component';
import { MyAccountComponent } from './components/client/my-account/my-account.component';
import { AdminUserComponent } from './components/admin/user/admin-user.component';
import { AdminAdsComponent } from './components/admin/ads/admin-ads.component';
import { AdminCategoryComponent } from './components/admin/category/admin-category.component';
import { AdminPostComponent } from './components/admin/post/admin-post.component';
import { AdminPlansComponent } from './components/admin/plans/admin-plans.component';
import { ContactComponent } from './components/client/contact/contact.component';
import { UserEditComponent } from './components/admin/user-edit/user-edit.component';

export const routes: Routes = [
  // 🔒 Rutas de autenticación (sin header/sidebar)
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'recovery', component: RecoveryComponent}
    ]
  },
  
  // 🧩 Layout principal (con header/sidebar)
  {
    path: '',
    component: MainLayoutComponent, 
    children: [
      { path: '', component: InicioComponent },
      { path: 'playas', component: PlayasComponent },
      { path: 'bienvenidos', component: BienvenidosComponent },
      { path: 'noticias', component: NoticiasComponent },
      
    ]
  },

  // 🛠 Admin con su layout... sin guard pendiente
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'index', component: AdminHomeComponent },
      { path: 'users', component: AdminUserComponent},
      { path: 'ads', component: AdminAdsComponent},
      { path: 'categories', component: AdminCategoryComponent},
      { path: 'posts', component: AdminPostComponent},
      { path: 'plans', component: AdminPlansComponent},
      { path: 'users/edit/:id',component: UserEditComponent}
    ]
  },

  // ✏️ Editor con su layout y-o guard
  {
    path: 'cliente',
    component: ClientLayoutComponent,
    children: [
      { path: 'index', component: ClientHomeComponent  },
      { path: 'adscreate', component: AdscreateComponent  },
      { path: 'plans', component: AvailablePlansComponent},
      { path: 'myads', component: MyAdsComponent},
      { path: 'myaccount', component: MyAccountComponent},
      { path: 'contact', component: ContactComponent}

    ]
  },
  
];