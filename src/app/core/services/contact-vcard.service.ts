import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactVcardService {
  constructor() {}

  openVCard(): void {
    window.location.href = '/jarol-rojas.vcf';
  }
}
