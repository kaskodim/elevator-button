import {FLOOR_COUNT_DESKTOP, FLOOR_COUNT_MOBILE} from '@src/constants';

export function getFloorCount(): number {
    if (window.innerWidth <= 768) {
        return FLOOR_COUNT_MOBILE;
    } else {
        return FLOOR_COUNT_DESKTOP;
    }
}