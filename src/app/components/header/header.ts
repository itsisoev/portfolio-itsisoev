import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface ILink {
  label: string;
  href: string;
}

@Component({
  selector: 'uc-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  links = signal<ILink[]>([
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Experience',
      href: '/experience'
    },
    {
      label: 'Skills',
      href: '/skills'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ])
  isMenuOpen = signal<boolean>(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
