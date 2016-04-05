'use strict';

import Page from './page.js';
import Cards from './cards.js';

class App {
    constructor(state) {
        this.page = new Page(state.page);
        this.cvLink = state.cvLink;
        this.abouts = state.abouts;
        this.cards = state.cards;
        this.activeCards = new Cards(state.cards);
    }
}

export default App;
