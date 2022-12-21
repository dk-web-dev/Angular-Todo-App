import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const ChangeAnimation = trigger('changeState', [
  state('state1', style({ backgroundColor: 'green', transform: 'scale(0.5)' })),
  state('state2', style({ backgroundColor: 'red', transform: 'scale(1.0)'})),
  transition('state1=>state2', [animate('2s')]),
  transition('state2=>state1', [animate('2s')]),
]);
