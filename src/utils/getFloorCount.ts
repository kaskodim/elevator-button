import {FLOOR_COUNT_DESKTOP, FLOOR_COUNT_MOBILE, MAX_MOBILE_WIDTH} from '@src/constants';

export function getFloorCount(): number {
    if (window.innerWidth <= MAX_MOBILE_WIDTH) {
        return FLOOR_COUNT_MOBILE;
    } else {
        return FLOOR_COUNT_DESKTOP;
    }
}