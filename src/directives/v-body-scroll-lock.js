import directive from './bsl-directive';

export default (Vue) => {
    Vue.directive('body-scroll-lock', directive);
    Vue.directive('bsl', directive);
}
