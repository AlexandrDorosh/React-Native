import React, { Component } from 'react';
// import { StyleSheet } from 'react-native';
import ListScreen from './ListScreen';
import { connect } from 'react-redux';
import { withGoodsstoreService } from '../hoc/with-goodsstore-services';
import fetchGoods from '../../actions';
import compose from '../../utils/compose';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';



class ListScreenContainer extends Component{
    // const Categories = [ 'All goods', 'Phones', 'Laptops', 'Computers', 'TVs', 'Cameras' ]

    componentDidMount(){
      this.props.fetchGoods()
  }
  render(){
      const { goods, loading, error } = this.props;
      if(loading){
          return <Spinner />
      }
      if(error){
          return <ErrorIndicator />
      }

      return <ListScreen goods={goods} />
  }
}



// const mapStateToProps = (state) => {
//     return {
//         books: state.books
//     }
// }

const mapStateToProps = ({goodsList: {goods, loading, error}}) => {
  return { goods, loading, error }  
}
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         booksLoaded
//     }, dispatch);
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  const { eShopService } = ownProps;
  return {
    fetchGoods: fetchGoods(eShopService, dispatch)
  }
}


export default compose(
  withGoodsstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ListScreenContainer)

