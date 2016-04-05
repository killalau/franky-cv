'use strict';

import {Dispatcher} from '../actions/creator.js';

class Page {
    constructor(data) {
        this.restore(data);

        this.Handler = {
            LOAD_PAGE: function(action) {
                this.restore(action.data || {});
                this.change();
            }
        };

        // Register action' handlers
        Dispatcher.register((function(action) {
            if (typeof this.Handler[action.type] === 'function') {
                this.Handler[action.type].apply(this, arguments);
            }
        }).bind(this));
    }

    restore(data) {
        data = data || {};
        this.type = data.type || 'collection';
        this.name = data.name || 'Hot';
    }

    change() {
        if (typeof this.onChange === 'function') {
            this.onChange();
        }
    }
}

export default Page;
