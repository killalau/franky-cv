'use strict';

import React from 'react';

import {Actions} from '../actions/creator.js';
import SocialMediaButton from './socialMediaButton.js';
import DetailsSection from './detailsSection.js';

let CollectionCard = React.createClass({
    render: function(){
        let content = this.props.content || {};
        let date = (content.time.from == null ? 'Past' : content.time.from) + ' - ' +
                     (content.time.to == null ? 'Present' : content.time.to);
        return (
            <article className="card">
                <header>
                    <a href="#" onClick={this.onLinkClick}>{content.title}</a>
                </header>
                <div className="content">
                    <div className="cover">
                        <a href="#" onClick={this.onLinkClick}>
                            <img src={"img/content/" + content.image} />
                        </a>
                    </div>
                    <div className="meta">
                        <a href="#" onClick={this.onLinkClick}>{content.type}</a>
                        <div className="separator">·</div>
                        <a href="#" onClick={this.onLinkClick}>{date}</a>
                    </div>
                    <div className="footer clearfix">
                        <div className="pull-left">
                            <a href="#" className="btn btn-default-flat" onClick={this.onLinkClick}>
                                <span className="glyphicon glyphicon-arrow-up"></span>
                            </a>
                            <span className="spacer"></span>
                            <a href="#" className="btn btn-default-flat" onClick={this.onLinkClick}>
                                <span className="glyphicon glyphicon-arrow-down"></span>
                            </a>
                            <span className="spacer"></span>
                            <a href="#" className="btn btn-default-flat" onClick={this.onLinkClick}>
                                <span className="glyphicon glyphicon-comment"></span>
                            </a>
                        </div>
                        <div className="pull-right">
                            {
                                (content.links||[])
                                    .map(v => (<SocialMediaButton key={v.type+v.url} type={v.type} url={v.url}></SocialMediaButton>))
                                    .reduce((p, c, i) => {
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
                {
                    content.showDetails ? (
                        <DetailsSection details={content.details}></DetailsSection>
                    ) : (
                        null
                    )
                }
            </article>
        );
    },

    onLinkClick: function(event){
        Actions.toggleDetails(this.props.content.type, this.props.content.title);
        event.preventDefault();
    }
});

export default CollectionCard;
