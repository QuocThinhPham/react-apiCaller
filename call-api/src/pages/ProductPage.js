import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import ProductList from './../components/Products/ProductList';
import ProductItem from './../components/Products/ProductItem';

class ProductPage extends React.Component {

  componentDidMount() {
    this.props.onFetchAllProducts();
  }

  showProductList = (products) => {
    var result =  <tr><td colSpan="6" className="text-center">
                    <div className="alert alert-warning mt-3" role="alert">
                      <strong>Chưa Có Sản Phẩm Trong Giỏ Hàng</strong>
                    </div>
                  </td></tr>;
    if(products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            index={index}
            onDeleteProduct={this.onDeleteProduct}
          />
        );
      })
    }
    return result;
  }

  onDeleteProduct = (id) => {
    this.props.onDeleteProduct(id);
  }

  findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if(product.id === id) result = index;
    })
    return result;
  }

  render() {
    var { products } = this.props;
    return (
      <ProductList>
        { this.showProductList(products) }
      </ProductList>
    );
  }
}

const mapStateToProps = state => {
  return {
    products : state.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAllProducts : () => {
      dispatch(actions.actFetchAllProductsRequest());
    },
    onDeleteProduct : (id) => {
      dispatch(actions.actDeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);