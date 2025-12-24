import { Component, inject, effect, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/components/navbar/navbar";
import { I18nService } from './core/services/i18n.service';
import { TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly i18n = inject(I18nService);
  private readonly titleService = inject(Title);
  private readonly translate = inject(TranslateService);

  private currentLang = toSignal(this.i18n.currentLang$, { initialValue: 'es' });

  constructor() {
    effect(() => {
      this.currentLang();
      this.updatePageTitle();
    });
  }

  private updatePageTitle() {
    this.translate.get('PORTFOLIO').subscribe((translated) => {
      this.titleService.setTitle(`Jarol Rojas | ${translated}`);
    });
  }
}
