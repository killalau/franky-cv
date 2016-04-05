'use strict';

import {Dispatcher} from '../actions/creator.js';

class Cards {
    constructor(data) {
        this.restore(data);

        this.Handler = {
            LOAD_PAGE: function(action) {
                var self = this,
                    page = action.data || {},
                    pageType = page.type,
                    pageName = page.name,
                    cards = [];
                if (pageType === 'collection') {
                    switch (pageName) {
                        case 'Hot':
                            cards = this._cards.slice(0);
                            break;
                        case 'Trending':
                            cards = this._cards.slice(0);
                            cards.sort(function(a, b) {
                                var at = a.type,
                                    bt = b.type,
                                    ai = self._cards.indexOf(a),
                                    bi = self._cards.indexOf(b),
                                    indexSort = ai - bi;
                                if (at === 'Projects') {
                                    return at === bt ? indexSort : -1;
                                }
                                if (bt === 'Projects') {
                                    return at === bt ? indexSort : 1;
                                }
                                if (at === 'Awards') {
                                    return at === bt ? indexSort : 1;
                                }
                                if (bt === 'Awards') {
                                    return at === bt ? indexSort : -1;
                                }
                                return indexSort;
                            });
                            break;
                        case 'Fresh':
                            var strToDate = function(mY) {
                                return new Date('1/' + mY);
                            }
                            cards = this._cards.slice(0);
                            cards.sort(function(a, b) {
                                var af = a.time.from,
                                    at = a.time.to,
                                    bf = b.time.from,
                                    bt = b.time.to,
                                    as = 0,
                                    bs = 0;
                                if (at == null) {
                                    as += 100;
                                }
                                if (bt == null) {
                                    bs += 100;
                                }
                                if (at != null && bt != null) {
                                    as += strToDate(at) > strToDate(bt) ? 10 : (at == bt ? 0 : -10);
                                }
                                if (af != null && bf != null) {
                                    as += strToDate(af) > strToDate(bf) ? 1 : (af == bf ? 0 : -1);
                                }
                                if (af == null && at == null) {
                                    as = -10;
                                }
                                if (bf == null && bt == null) {
                                    bs = -10;
                                }
                                return bs - as;
                            });
                            break;
                        default:
                            cards = this._cards.filter(function(v) {
                                return v.type === pageName;
                            });
                            break;
                    }
                } else {

                }
                this.cards = cards || [];
                this.change();
            },

            TOGGLE_DETAILS: function(action) {
                var self = this;
                var card = action.data || {};
                var cardType = card.type;
                var cardTitle = card.title;
                if (cardType && cardTitle) {
                    this.cards.forEach(function(v) {
                        if (v.type === cardType && v.title === cardTitle) {
                            v.showDetails = !v.showDetails;
                            self.change();
                            return false;
                        }
                    });
                }
            },

            TOGGLE_EXPAND_ALL: function(action) {
                var cards = this.cards || [];
                var allShowDetails = cards.reduce(function(p, c) {
                    return p && c.showDetails;
                }, (cards[0] || {}).showDetails);

                cards.forEach(function(v) {
                    v.showDetails = !allShowDetails;
                });
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
        this._cards = data || [];
        this.cards = this._cards.slice(0);
    }

    change() {
        if (typeof this.onChange === 'function') {
            this.onChange();
        }
    }
}

export default Cards;
