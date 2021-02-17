import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAccess } from '../context/access';
import Onboard from '../pages/Onboard';
import NavRoutes from './nav.routes';

const Routes: React.FC = () => {
    const { first, loading } = useAccess();

    if(loading){
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#003265"/>
            </View>
        );
    }

    return first ? <NavRoutes/> : <Onboard/>
};

export default Routes;