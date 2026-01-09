import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactVcardService {
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
    // Crear el archivo VCF como Blob
    const blob = new Blob([this.vcardData], { type: 'text/vcard' });
    const file = new File([blob], 'jarol-rojas.vcf', { type: 'text/vcard' });

    // Método 1: Web Share API (mejor para móviles - abre diálogo nativo)
    if (this.canUseWebShare(file)) {
      try {
        await navigator.share({
          files: [file],
          title: 'Contacto de Jarol Rojas',
        });
        return;
      } catch (error) {
        // Si el usuario cancela o hay error, intentar método alternativo
        if ((error as Error).name !== 'AbortError') {
          console.warn('Web Share falló, usando método alternativo');
        } else {
          return; // Usuario canceló, no hacer nada más
        }
      }
    }

    // Método 2: Data URI (funciona en muchos móviles)
    if (this.isMobileDevice()) {
      const dataUri = `data:text/vcard;charset=utf-8,${encodeURIComponent(this.vcardData)}`;
      window.location.href = dataUri;
      return;
    }

    // Método 3: Descarga tradicional (para desktop)
    this.downloadVCard(blob);
  }

  private canUseWebShare(file: File): boolean {
    return (
      typeof navigator !== 'undefined' &&
      'share' in navigator &&
      'canShare' in navigator &&
      navigator.canShare({ files: [file] })
    );
  }

  private isMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  private downloadVCard(blob: Blob): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'jarol-rojas.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
