import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const RESERVE_SCROLL_BAR_GAP = 'reserveScrollBarGap';
const options = {
    reserveScrollBarGap: true
};

export default {
    inserted: (el, binding) => {
        if (binding.arg && binding.arg === RESERVE_SCROLL_BAR_GAP && binding.value) {
            disableBodyScroll(el, options);
        } else if (binding.value) {
            disableBodyScroll(el);
        }
    },
    componentUpdated: (el, binding) => {
        if (binding.oldValue === binding.value) {
            return;
        }

        if (binding.arg && binding.arg === RESERVE_SCROLL_BAR_GAP && binding.value) {
            disableBodyScroll(el, options);
        } else if (binding.value) {
            disableBodyScroll(el);
        } else {
            enableBodyScroll(el);
        }
    },
    unbind: (el) => {
        enableBodyScroll(el);
    },
}
