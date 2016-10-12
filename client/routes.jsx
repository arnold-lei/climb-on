import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx'
import MapWrapper from './map/MapWrapper.jsx'
import CreateMarker from './markers/CreateMarker.jsx'

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
                content: (<MapWrapper />)
        })
    }
})

FlowRouter.route('/marker', {
    action(){
        mount(MainLayout, {
            content: (<CreateMarker />)
        })
    }
})
