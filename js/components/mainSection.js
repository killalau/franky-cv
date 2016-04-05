'use strict';

import React from 'react';

import SideSection from './sideSection.js';
import CollectionSection from './collectionSection.js';
import DetailsSection from './detailsSection.js';

var MainSection = (props) => {
    var page = props.page || {};
    var pageType = page.type;
    var pageName = page.name;
    var abouts = props.abouts || {};
    var activeCards = props.activeCards || [];
    return (
        <div className="container">
            <SideSection abouts={abouts}></SideSection>
            {
                pageType === 'collection' ?
                (
                    <CollectionSection cards={activeCards}></CollectionSection>
                ) : (
                    <DetailsSection cards={activeCards}></DetailsSection>
                )
            }
        </div>
    );
};

export default MainSection;