// import the required animation functions from the angular animations module
import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';

export const OpenCloseAnimation = trigger('openClose', [
  state('open', style({ height: '100px', opacity: 1, backgroundColor: 'red' })),
  state('close',style({ height: '50px', opacity: 0.8, backgroundColor: 'green' })),
  transition('open=>close', [animate('1s ease-in')]),
  transition('close=>open', [animate('0.5s ease-out')])
]);
