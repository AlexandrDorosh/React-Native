import React from 'react';
import { GoodsstoreServiceConsumer } from '../goodsstore-service-context/goodsstore-service-context';

const withGoodsstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <GoodsstoreServiceConsumer>
                {
                    (eShopService) => {
                        return ( <Wrapped {...props} eShopService={eShopService}/>)
                    }
                }
            </GoodsstoreServiceConsumer>
        );
    }
};

export { withGoodsstoreService };