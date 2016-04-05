'use strict';

import React from 'react';

let DetailsSection = (props) => {
    let details = props.details || [];
    return (
        <div className="details">
            <header>
                {details.length} Details
            </header>
            <div className="content">
                {
                    details.map(function(v){
                        let html = {"__html": v};
                        return (
                            <div key={v} className="details-item" dangerouslySetInnerHTML={html} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default DetailsSection;
