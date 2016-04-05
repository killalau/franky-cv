'use strict';

import React from 'react';

import SocialMediaButton from './socialMediaButton.js';

var SideSection = (props) => {
    var abouts = props.abouts || {};
    var details = abouts.details || [];
    var skillCompUl = [];
    var skillCompFlat = [];
    Object.keys(abouts.skills).forEach(function(key){
        skillCompFlat.push(
            <div key={key} className="container">
                <div className="col-xs-3">{key}</div>
                <div className="col-xs-9">{ abouts.skills[key].join(', ') }</div>
            </div>
        );
        skillCompUl.push(
            <li key={key}>
                <div>{key}</div>
                <ul>
                    {
                        abouts.skills[key].map(function(v){
                            return (<li key={v}>{v}</li>);
                        })
                    }
                </ul>
            </li>
        );
    });
    return (
        <div className="side pull-right">
            <div className="abouts-item profile">
                <div>
                    <div className="title">{abouts.name}</div>
                    <div>{abouts.address}</div>
                    <div><a href={'mailto:' + abouts.email}>{abouts.email}</a></div>
                    <img src={'img/content/' + abouts.profilePic} className="profilePic hidden-xs hidden-sm" />
                    <div className="buttons-bar">
                        {
                            abouts.links.map(function(v){
                                return <SocialMediaButton key={v.type + v.url} type={v.type} url={v.url}></SocialMediaButton>;
                            })
                            .reduce(function(p, c, i){
                                if(i > 0){
                                    p.push(<span key={'spacer' + i} className="spacer"></span>);
                                }
                                p.push(c);
                                return p;
                            }, [])
                        }
                    </div>
                </div>
            </div>
            <div className="abouts-item">
                <div>
                    <div className="title">About this CV website</div>
                    <div>
                        This website follows the <a href="http://9gag.com/">9gag.com</a> style,
                        does it look cool and fun?
                    </div>
                    <div>
                        The key technologies involve in this website are:
                        jQuery, Bootstrap, ReactJs+Flux.
                    </div>
                </div>
            </div>
            <div className="abouts-item">
                <div>
                    <div className="title">Programming Skills</div>
                    <ul className="hidden-xs hidden-sm">{skillCompUl}</ul>
                    <div className="hidden-md hidden-lg">{skillCompFlat}</div>
                </div>
            </div>
        </div>
    );
};

export default SideSection;
