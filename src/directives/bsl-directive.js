import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default {
    inserted: (el, binding) => {
        if (binding.value) {
            disableBodyScroll(el);
        }
    },
    componentUpdated: (el, binding) => {
        if (binding.value) {
            disableBodyScroll(el);
        } else {
            enableBodyScroll(el);
        }
    },
    unbind: (el) => {
        enableBodyScroll(el);
    },
}
