'use strict';

import React from 'react';

import Page from '../stores/page.js';
import Cards from '../stores/cards.js';
import AppStore from '../stores/app.js';

import HeaderNav from './headerNav.js';
import MainSection from './mainSection.js';

let App = React.createClass({
    getInitialState: function() {
        let store = new AppStore(this.props);
        this.bindStoreChange(store);
        return store;
    },

    refreshState: function() {
        this.setState(this.state);
    },

    bindStoreChange: function(state) {
        state.page.onChange = this.refreshState;
        state.activeCards.onChange = this.refreshState;
    },

    unbindStoreChange: function() {
        this.state.page.onChange = null;
        this.state.activeCards.onChange = null;

    },

    render: function(){
        let cardTypesObj = this.state.cards
                            .map(v => v.type)
                            .reduce((p, c) => { p[c] = true; return p; }, {});
        let cardTypes = Object.keys(cardTypesObj).concat(['ExpandAll']);
        let page = this.state.page;
        let activeCards = this.state.activeCards.cards;
        let abouts = this.state.abouts;
        let cvLink = this.state.cvLink;
        return (
            <div id="wrapper">
                <HeaderNav curPage={page} sections={cardTypes} cvLink={cvLink}></HeaderNav>
                <MainSection page={page} activeCards={activeCards} abouts={abouts}></MainSection>
            </div>
        );
    }
});

export default App;