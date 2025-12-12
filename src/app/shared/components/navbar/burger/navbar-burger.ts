import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-navbar-burger',
  templateUrl: './navbar-burger.html',
  styleUrl: './navbar-burger.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarBurger {
  isOpen = input(false);
  toggled = output<void>();

  onToggle() {
    this.toggled.emit();
  }
}
