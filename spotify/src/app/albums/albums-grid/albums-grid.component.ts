import { Component, Input } from '@angular/core';
import { AlbumCardComponent } from '../album-card/album-card.component';

@Component({
  selector: 'app-albums-grid',
  standalone: true,
  imports: [AlbumCardComponent],
  templateUrl: './albums-grid.component.html',
  styleUrl: './albums-grid.component.css'
})
export class AlbumsGridComponent {
  @Input() albums: any;
}
