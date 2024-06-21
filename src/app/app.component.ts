import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RichTextEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-spell-checker';
}
