import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactVcardService {
  constructor() {}

  openVCard(): void {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Jarol Rojas Reyes
N:Reyes;Jarol;;;
TEL:+34699355853
EMAIL:jr.rojas0327@gmail.com
URL:https://jarolrojas.dev
TITLE:Desarrollador de Software
END:VCARD`;

    // Navegar directamente al data URL sin atributo download
    const encodedVCard = encodeURIComponent(vcard);
    window.location.href = `data:text/vcard;charset=utf-8,${encodedVCard}`;
  }
}
  }
}
