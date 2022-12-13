import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import { Store, Persistor } from './store';
import Navigator from './routes';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const theme = {
   ...DefaultTheme,
};


const App = () => {
   return (

      <Provider store={Store}>
         <PersistGate persistor={Persistor}>
            <PaperProvider theme={theme} settings={{
               icon: props => <AwesomeIcon {...props} />,
            }}>
               <Navigator />
            </PaperProvider>
         </PersistGate>
      </Provider>
   );
};

export default App;
