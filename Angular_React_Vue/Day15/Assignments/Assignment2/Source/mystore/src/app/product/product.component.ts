import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { trigger, animate, style, group, query, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', left: 0, width: '100%' })),
        group([
          query(':enter', [
            animate('2000ms ease', keyframes([
              style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
              style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
              style({ transform: 'scale(1) translateX(0%)', offset: 1 })
            ]))
          ]),
          query(':leave', [
            animate('2000ms ease', keyframes([
              style({ transform: 'scale(1)', offset: 0 }),
              style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
              style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
            ]))
          ], { optional: true }),
        ])
      ])
    ])
  ],
})
export class ProductComponent implements OnInit {
  roll: any;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.roll = this.auth.gettoken()
  }
  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
}
