'use strict';

import domready from 'domready';
import Vue from 'vue';
import frontpage from './components/frontpage';

domready(() => {
    new Vue({
        template: '<frontpage></frontpage>',
        el: '#app',
        components: {
            frontpage
        }
    });
});
