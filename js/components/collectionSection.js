'use strict';

import React from 'react';

import CollectionCard from './collectionCard.js';

let CollectionSection = (props) => {
    let cards = props.cards || [];
    let cardsEl = cards.map(v => <CollectionCard key={v.type + v.title} content={v}></CollectionCard>);

    return (
        <div className="main pull-left">
            {cardsEl}
        </div>
    );
};

export default CollectionSection;
