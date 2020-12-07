import * as React from 'react';
import { Provider } from 'react-redux';

import App2 from './App2';
import ErrorBoundry from './Components/error-boundry/error-boundry';
import EShopService from './services/e-shop-services';
import { GoodsstoreServiceProvider } from './Components/goodsstore-service-context/goodsstore-service-context';

import store from './store';

const eShopService = new EShopService()

    
export default function App() {
  return(
    <Provider store={store}>
        <ErrorBoundry>
            <GoodsstoreServiceProvider value={eShopService}>
                    <App2 />
            </GoodsstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
  )
}