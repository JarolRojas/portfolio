import { Component, inject, Input } from '@angular/core';
import { I18nService } from '../../../core/services/i18n.service';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-traduction',
  imports: [TranslateModule, UpperCasePipe, FormsModule, AsyncPipe],
  templateUrl: './traduction.html',
})
export class TraductionComponent {

  private _i18nService = inject(I18nService);

  get languages() {
    return this._i18nService.getLanguages();
  }

  currentLang$ = this._i18nService.currentLang$;

  changeLang(lang: string) {
    this._i18nService.changeLanguage(lang);
  }
}
