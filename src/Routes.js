import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import SearchPage from './components/search';

export default props => {
    return(
        <Router>
            <Stack>
                <Scene key="searchPage" component={ SearchPage } hideNavBar />
            </Stack>
        </Router>
    );
}