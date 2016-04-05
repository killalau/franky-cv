'use strict';

import React from 'react';

let SocialMediaButton = (props) => {
    let name = props.type || '';
    let type = name.toLowerCase();
    let url = props.url;
    let img = '';
    let css = '';
    if(type){
        img = 'img/icons/' + type + '.png';
        css = 'btn btn-social-media btn-' + type;
        if(!url){
            if(type === 'facebook'){
                url = 'https://www.facebook.com/killalau';
            }else if(type === 'twitter'){
                url = 'https://twitter.com/killalau';
            }else if(type === 'linkedin'){
                url = 'https://hk.linkedin.com/pub/franky-lau/78/930/692';
            }else{
                url = '#';
            }
        }
    }

    return (
        <a href={url} className={css} target="_blank">
            {img ? <img src={img} title={name} alt={name} /> : null}
            {name}
        </a>
    );
};

export default SocialMediaButton;
