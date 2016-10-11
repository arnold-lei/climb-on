import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx'
import App from '../imports/ui/App.jsx'
import CreateMarker from '../imports/ui/CreateMarker.jsx'

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
                content: (<App />)
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
