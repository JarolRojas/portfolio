import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private _translate = inject(TranslateService);
  private _currentLang = new BehaviorSubject<string>('es');

  readonly currentLang$ = this._currentLang.asObservable();

  constructor() {
    this.init();
  }

  init() {
    this._translate.addLangs(['es', 'en']);
    this._translate.setFallbackLang('es');

    const savedLang = localStorage.getItem('lang');
    const initialLang = savedLang || 'es';

    this._setLanguage(initialLang);
  }

  changeLanguage(lang: string) {
    this._setLanguage(lang);
  }

  private _setLanguage(lang: string) {
    this._translate.use(lang);
    localStorage.setItem('lang', lang);
    this._currentLang.next(lang);
  }

  getLanguages() {
    return this._translate.getLangs();
  }
}
