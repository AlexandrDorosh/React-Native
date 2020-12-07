import updateGoodsList from './goods-list';

const reducer = (state, action) => {
    return{
        goodsList: updateGoodsList( state, action )
    }
};

export default reducer;