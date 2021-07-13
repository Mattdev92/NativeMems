import React, {FC} from 'react';
import { WithNavigationProps } from './withNavigation.types';
import { View,  } from 'react-native';
import Navigation from '../../components/organisms/navigation/navigation';
import { styles } from './withNavigation.styles';

const WithNavigation: FC<WithNavigationProps> = ({children, navigation}) =>{
return(
    <View style={styles.mainContainer}>
    <Navigation navigation={navigation} />
    {
        children
    }
  </View>
)
}

export default WithNavigation;