import React from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
    var statusClass = product.status ? 'info' : 'warning';
    return (
      <tr>
        <td className="text-center">{ index + 1 }</td>
        <td>{ product.name }</td>
        <td className="text-center">{ product.price }$</td>
        <td>{ product.description }</td>
        <td className="text-center">
          <span className={ `badge badge-${statusClass}` }>
            {statusName}
          </span>
        </td>
        <td className="text-center">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-outline-warning btn-sm mr-3"
          >
            <span className="fas fa-pencil-alt mr-2"></span>Sửa
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={ () => this.onDeleteProduct(product.id) }
          >
            <span className="fas fa-trash-alt mr-2"></span>Xóa
          </button>
        </td>
      </tr>
    );
  }

  onDeleteProduct = (id) => {
    if(confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      this.props.onDeleteProduct(id);
    }
  }
}

export default ProductItem;