import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    var { children } = this.props;
    return (
      <div className="container mt-3">
        <div className="row">
          <h3 className="mx-auto">Danh Sách Sản Phẩm</h3>
        </div>
        <div className="row mt-2">
          <Link to="product/add" className="btn btn-outline-primary">
            Thêm Sản Phẩm
          </Link>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
          <table className="table table-stripped table-bordered">
              <thead className="thead-inverse">
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên Sản Phẩm</th>
                  <th className="text-center">Giá</th>
                  <th className="text-center">Mô tả</th>
                  <th className="text-center">Trạng Thái</th>
                  <th className="text-center">Hành Động</th>
                </tr>
                </thead>
                <tbody>
                  { children }
                </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;