import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactVcardService {
  private readonly vcardUrl = '/jarol-rojas.vcf';

  private readonly vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Jarol Rojas Reyes
N:Rojas Reyes;Jarol;;;
TEL;TYPE=CELL:+34699355853
EMAIL;TYPE=INTERNET:jr.rojas0327@gmail.com
URL:https://jarolrojas.dev
TITLE:Desarrollador de Software
ORG:Freelance
END:VCARD`;

  constructor() {}

  async openVCard(): Promise<void> {
    // En Android Chrome: usar Web Share API con el archivo del servidor
    if (this.isAndroid() && 'share' in navigator && 'canShare' in navigator) {
      try {
        // Descargar el archivo VCF del servidor
        const response = await fetch(this.vcardUrl);
        const blob = await response.blob();
        const file = new File([blob], 'jarol-rojas.vcf', { type: 'text/vcard' });

        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file] });
          return;
        }
      } catch (error) {
        if ((error as Error).name === 'AbortError') return;
        console.log('Web Share no disponible, usando método alternativo');
      }
    }

    // Método alternativo: abrir el archivo directamente (el servidor lo sirve con Content-Disposition: inline)
    window.open(this.vcardUrl, '_blank');
  }

  private isAndroid(): boolean {
    return /Android/i.test(navigator.userAgent);
  }
}
