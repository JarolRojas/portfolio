import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactVcardService {
  constructor() {}

  downloadVCard(): void {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Jarol Rojas Reyes
N:Reyes;Jarol;;;
TEL:+34699355853
EMAIL:jr.rojas0327@gmail.com
URL:https://jarolrojas.dev
TITLE:Desarrollador de Software
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', 'jarol-rojas.vcf');
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openVCardInBrowser(): void {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Jarol Rojas Reyes
N:Reyes;Jarol;;;
TEL:+34699355853
EMAIL:jr.rojas0327@gmail.com
URL:https://jarolrojas.dev
TITLE:Desarrollador de Software
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }
}
