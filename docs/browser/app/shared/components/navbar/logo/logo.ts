import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar-logo',
  imports: [RouterLink],
  templateUrl: './logo.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo { }
