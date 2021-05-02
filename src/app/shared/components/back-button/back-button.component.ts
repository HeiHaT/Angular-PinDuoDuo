import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent implements OnInit {
  @Input() float = true;
  constructor(private location: Location) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  get imageUrl() {
    return this.float
      ? `assets/icons/back_light.png`
      : `assets/icons/back_dark.png`;
  }

  // tslint:disable-next-line:typedef
  handleBack() {
    this.location.back();
  }
}
