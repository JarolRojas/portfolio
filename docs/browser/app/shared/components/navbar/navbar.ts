import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TraductionComponent } from "./traduction/traduction";
import { Section } from '../../models/navigation/section';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NavbarBurger } from './burger/navbar-burger';
import { Logo } from "./logo/logo";
import { NAV_SECTIONS } from '../../constants/navigation';
@Component({
  selector: 'app-navbar',
  imports: [TranslateModule, TraductionComponent, RouterLink, NavbarBurger, Logo, RouterLinkActive],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
isMenuOpen = signal(false);

sections: Section[] = NAV_SECTIONS;

toggleMenu() {
  this.isMenuOpen.update((current) => !current);
}

closeMenu() {
  this.isMenuOpen.set(false);
}

}
