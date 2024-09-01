import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) 
  }, 
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'display',
    loadChildren: () => import('./pages/display/display.module').then(m => m.DisplayPageModule)
  },
  
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'denuncias',
    loadChildren: () => import('./pages/denuncias/denuncias.module').then( m => m.DenunciasPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'add-account',
    loadChildren: () => import('./pages/add-account/add-account.module').then( m => m.AddAccountPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./pages/security/security.module').then( m => m.SecurityPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
 
  {
    path: 'visibility',
    loadChildren: () => import('./pages/visibility/visibility.module').then( m => m.VisibilityPageModule)
  },
  {
    path: 'delete-account',
    loadChildren: () => import('./pages/delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./pages/data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'cache',
    loadChildren: () => import('./pages/cache/cache.module').then( m => m.CachePageModule)
  },
  {
    path: 'register-account',
    loadChildren: () => import('./pages/register-account/register-account.module').then( m => m.RegisterAccountPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./pages/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'login-options',
    loadChildren: () => import('./pages/login-options/login-options.module').then( m => m.LoginOptionsPageModule)
  },
  {
    path: 'assist',
    loadChildren: () => import('./pages/assist/assist.module').then( m => m.AssistPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'upload-photo',
    loadChildren: () => import('./pages/upload-photo/upload-photo.module').then( m => m.UploadPhotoPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  
  
  
  {
    path: '**',//se le colocar los por para que sala por defecto salga una pagina no found y se debe de aagregar de los ultimos
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  

   
  
  
  
  
  
 
  
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
