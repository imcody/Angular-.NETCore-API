import { trigger, state, style, transition, animate } from '@angular/animations';

export const menuSlideDown =
    trigger('slideInOut', [
        state('in', style({
            'max-height': '{{height}}px'
        }),
            { params: { height: '5000' } }
        ),
        state('out', style({
            'max-height': '{{height}}',
            overflow: 'hidden'
        }),
            { params: { height: 0 } }
        ),
        transition(
            'in => out',
            animate('{{duration}}s ease-in-out'),
            { params: { duration: 0.2 } }
        ),
        transition(
            'out => in',
            animate('{{duration}}s ease-in-out'),
            { params: { duration: 0.2 } }
        )
    ]);

export const arrowRotate =
    trigger('arrowRotate', [
        state('open', style({
            transform: 'rotate(0deg)'
        })),
        state('close', style({
            transform: 'rotate(-180deg)'
        })),
        transition('open => close', animate('0.5s ease-in-out')),
        transition('close => open', animate('0.5s ease-in-out'))
    ]);

