import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactVcardService } from '@core/services/contact-vcard.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  constructor(private vcardService: ContactVcardService) {}

  downloadContact(): void {
    this.vcardService.openVCardInBrowser();
  }
}
