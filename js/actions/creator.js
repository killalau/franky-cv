'use strict';

import Flux from 'flux';

export let Dispatcher = new Flux.Dispatcher();

export let Actions = {
    loadCollection: function(name) {
        $('body').scrollTop(0);
        Dispatcher.dispatch({
            type: 'LOAD_PAGE',
            data: {
                type: 'collection',
                name: name
            }
        });
    },
    toggleDetails: function(type, title) {
        Dispatcher.dispatch({
            type: 'TOGGLE_DETAILS',
            data: {
                type: type,
                title: title
            }
        });
    },
    toggleExpandAll: function() {
        Dispatcher.dispatch({
            type: 'TOGGLE_EXPAND_ALL'
        });
    }
};
