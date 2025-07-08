import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

interface ILink {
  label: string;
  href: string;
}

@Component({
  selector: 'uc-header',
  imports: [
    RouterLink
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
}
