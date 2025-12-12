import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TraductionComponent } from "./traduction/traduction";
import { Sections } from '../../models/interfaces/sections';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NavbarBurger } from './burger/navbar-burger';
import { Logo } from "./logo/logo";
@Component({
  selector: 'app-navbar',
  imports: [TranslateModule, TraductionComponent, RouterLink, NavbarBurger, Logo, RouterLinkActive],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
isMenuOpen = signal(false);

sections: Sections[] = [
  { name: 'NAVBAR.HOME', route: '/', icon: 'home' },
  { name: 'NAVBAR.ABOUT', route: '/about', icon: 'badge' },
  { name: 'NAVBAR.EXPERIENCE', route: '/experience', icon: 'work' },
  { name: 'NAVBAR.SKILLS', route: '/skills', icon: 'psychology' },
  { name: 'NAVBAR.PROJECTS', route: '/projects', icon: 'terminal' },
  { name: 'NAVBAR.CONTACT', route: '/contact', icon: 'alternate_email' },
];

toggleMenu() {
  this.isMenuOpen.update((current) => !current);
}

closeMenu() {
  this.isMenuOpen.set(false);
}

}
