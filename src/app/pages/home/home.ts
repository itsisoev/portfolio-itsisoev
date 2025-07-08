import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ScrollDown} from '../../shared/components/scroll-down/scroll-down';

@Component({
  selector: 'app-home',
  imports: [
    ScrollDown
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {

}
