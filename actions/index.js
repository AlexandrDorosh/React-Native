
const goodsRequested = () => {
    return {
        type: 'FETCH_GOODS_REQUEST',
    };
};

const goodsLoaded = (newGoods) => {
    return {
        type: 'FETCH_GOODS_SUCCESS',
        payload: newGoods
    };
};

const goodsError = (error) => {
    return {
        type: 'FETCH_GOODS_FAILURE',
        payload: error
    };
};

const fetchGoods = ( EShopService, dispatch ) => () => {
    dispatch(goodsRequested());
    EShopService.getElectronics()
    .then((data) => dispatch(goodsLoaded(data)))
    .catch((error) => dispatch(goodsError(error)));
}

export default fetchGoods;