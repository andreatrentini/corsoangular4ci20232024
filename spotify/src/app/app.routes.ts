import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditsComponent } from './credits/credits.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { loggedInGuard } from './logged-in.guard';

// L'oggetto routes definisce i percorsi (parte finale della url dell'applicazione)
// gestiti dalla nostra app.
// E' un array di oggetti
export const routes: Routes = [
    // Ogni oggetto presenta path: parte finale del percorso (quello che segue la root)
    // e una proprietà chiamata component: ovvero il componente da visualizzare con quella url.
    {path: '', component: HomeComponent},
    {path: 'credits', component: CreditsComponent},
    // canActivate prevede un array di Guards (funzioni che restituiscono true or false) che
    // stabiliscono se si può accedere o meno al componente
    {path: 'artists', component: ArtistsComponent, canActivate: [loggedInGuard]},
    {path: 'albums/:id', component: AlbumsComponent, canActivate: [loggedInGuard]},
    {path: 'login', component: LoginComponent},
    // Con ** gestisco tutti i percorsi diversi da quelli elencati prima
    {path: '**', component: NotFoundComponent}
];
