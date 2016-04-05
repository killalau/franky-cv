'use strict';

import React from 'react';

import {Actions} from '../actions/creator.js';

let HeaderNav = React.createClass({
    render: function(){
        let cvLink = this.props.cvLink;
        let curPageName = (this.props.curPage||{}).name;
        let onLinkClick = this.onLinkClick;
        let sections = this.props.sections || [];
        let sectionsLink = sections.map((v) => {
            let sec = v !== 'ExpandAll' ? v : 'ಠ_ಠ';
            return (
                <li key={v}><a href="#" data-page={v} onClick={onLinkClick}>{sec}</a></li>
            );
        });
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">

                    {/* The header nav icon */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#" data-page="Hot" onClick={onLinkClick}>
                            <img alt="Franky Lau CV" src="img/cv-logo.png" />
                        </a>
                    </div>

                    {/* Main menu (collapse) */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                        {/* Primary menu items */}
                        <ul className="nav navbar-nav primary">
                            {
                                ['Hot', 'Trending', 'Fresh'].map(function(v){
                                    return (
                                        <li key={v} className={curPageName === v ? 'active' : ''}>
                                            <a href="#" data-page={v} onClick={onLinkClick}>{v}</a>
                                        </li>
                                    );
                                })
                            }

                            {/* Sections dropdown menu */}
                            <li className="dropdown hidden-xs">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    Sections <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    {sectionsLink}
                                </ul>
                            </li>
                        </ul>

                        {/* Sections sub-menu */}
                        <ul className="nav navbar-nav visible-lg-block visible-md-block visible-xs-block">
                            {sectionsLink}
                            <li className="visible-xs-block"><a href={cvLink} target="_blank">Formal CV</a></li>
                        </ul>

                        {/* Float right CV download button */}
                        <form className="navbar-form navbar-right hidden-xs" role="download">
                            <div className="visible-lg-inline-block visible-sm-inline-block">
                                <button type="button" className="btn btn-mute">
                                    <span className="glyphicon glyphicon-book"></span>
                                </button>
                                <button type="button" className="btn btn-mute">Formal CV</button>
                            </div>
                            <a className="btn btn-primary-flat visible-lg-inline-block visible-md-inline-block visible-sm-inline-block"
                                    href={cvLink}
                                    target="_blank">
                                <div className="hidden-md">Get Here</div>
                                <div className="visible-md-inline-block">Formal CV</div>
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        );
    },
    onLinkClick: function(event){
        let $target = $(event.target).closest('a');
        let page = $target.data('page') || 'Hot';
        if(page === 'ExpandAll'){
            Actions.toggleExpandAll();
        }else{
            Actions.loadCollection(page);
        }
        event.preventDefault();
    }
});

export default HeaderNav;
