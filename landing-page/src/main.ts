import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app'; // Importa AppComponent
import { routes } from './app/app.routes'; // Importa tus rutas

// Configuración de la aplicación
const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    // Agrega otros proveedores aquí si es necesario
  ]
};

bootstrapApplication(AppComponent, appConfig) // Pasa AppComponent y appConfig
  .catch(err => console.error(err));
