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
    const blob = new Blob([this.vcardData], { type: 'text/x-vcard' });
    const file = new File([blob], 'jarol-rojas.vcf', { type: 'text/x-vcard' });

    // Método 1: Web Share API (Android Chrome, Safari iOS 15+)
    if (this.canUseWebShare(file)) {
      try {
        await navigator.share({ files: [file] });
        return;
      } catch (error) {
        if ((error as Error).name === 'AbortError') return;
      }
    }

    // Método 2: Para iOS Safari - abrir data URI en nueva ventana
    if (this.isIOS()) {
      const dataUri = `data:text/x-vcard;charset=utf-8,${encodeURIComponent(this.vcardData)}`;
      const newWindow = window.open(dataUri, '_blank');
      if (newWindow) return;
    }

    // Método 3: Para Android - usar Blob URL con window.open
    if (this.isAndroid()) {
      const blobUrl = URL.createObjectURL(blob);
      const opened = window.open(blobUrl, '_self');
      if (opened) {
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        return;
      }
    }

    // Método 4: Data URI directo
    if (this.isMobileDevice()) {
      const dataUri = `data:text/x-vcard;charset=utf-8,${encodeURIComponent(this.vcardData)}`;
      window.location.href = dataUri;
      return;
    }

    // Método 5: Descarga para desktop
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

  private isIOS(): boolean {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  }

  private isAndroid(): boolean {
    return /Android/i.test(navigator.userAgent);
  }

  private isMobileDevice(): boolean {
    return this.isIOS() || this.isAndroid() || /webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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
