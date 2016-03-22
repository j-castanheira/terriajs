'use strict';

import React from 'react';
import ChartPanel from '../ChartPanel.jsx';
import DistanceLegend from './DistanceLegend.jsx';
import LocationBar from './LocationBar.jsx';
import Timeline from './Timeline/Timeline.jsx';
import ObserveModelMixin from '../ObserveModelMixin';
import knockout from 'terriajs-cesium/Source/ThirdParty/knockout';

const BottomDock = React.createClass({
    mixins: [ObserveModelMixin],

    propTypes: {
        terria: React.PropTypes.object.isRequired,
        topLayer: React.PropTypes.object // for some reason this needs to be a separate prop for ObserveModelMixin to pick it up.
    },

    componentDidUpdate() {
        const offsetHeight = document.querySelector('.bottom-dock').offsetHeight;
        document.querySelector('.cesium-widget-credits').style.bottom = offsetHeight + 'px';
    },

    render() {
        const terria = this.props.terria;

        return (
            <div className='bottom-dock'>
                <div className='location-distance'>
                    <LocationBar terria={terria}/>
                    <DistanceLegend terria={terria}/>
                </div>
                <If condition={this.props.topLayer}>
                    <Timeline terria={terria}/>
                </If>
            </div>
        );
    }
});

module.exports = BottomDock;