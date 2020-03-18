import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest
} from './../actions/index';

class ProductActionPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id : '',
      name : '',
      price : '',
      description : '',
      status : false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.itemEditting) {
      var { id, name, price, description, status } = nextProps.itemEditting;
      this.setState({
        id,
        name,
        price,
        description,
        status
      });
    }
  }

  componentDidMount() {
    var {match} = this.props;
    if(match) {
      var { id } = match.params;
      this.props.onEditProduct(id);
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = (target.type === 'checkbox') ?  target.checked : target.value;
    this.setState({
      [name] : value
    });
  }
  
  handleSubmitForm = (event) => {
    event.preventDefault();
    var { id, name, price, description, status } = this.state;
    var { history }= this.props;
    var product = {
      id : id,
      name : name,
      price : price,
      description : description,
      status : status
    }
    if(id) {
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }
    history.goBack();
  }

  render() {
    var { name, price, description, status } = this.state;
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-header text-white bg-success">
            <h5>Thêm Sản Phẩm</h5>
          </div>
          <div className="card-body">
            <form onSubmit={ this.handleSubmitForm }>
              <div className="form-group row text-center">
                <label className="col-md-2 offset-md-2">Tên Sản Phẩm</label>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={ this.onChange }
                  />
                </div>
              </div>
              <div className="form-group row text-center">
                <label className="col-md-2 offset-md-2">Giá</label>
                <div className="col-md-6">
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    value={price}
                    onChange={ this.onChange }
                  />
                </div>
              </div>
              <div className="form-group row text-center">
                <label className="col-md-2 offset-md-2">Mô Tả</label>
                <div className="col-md-6">
                  <textarea
                    className="form-control"
                    name="description"
                    rows="2"
                    value={description}
                    onChange={ this.onChange }
                  ></textarea>
                </div>
              </div>
              <div className="form-group row text-center">
                <label className="col-md-2 offset-md-2">Trạng Thái</label>
                <div className="col-md-6 form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="status"
                      value={status}
                      onChange={ this.onChange }
                      checked={status}
                    />
                    Còn Hàng
                  </label>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12 text-center">
                  <Link to="/product" className="btn btn-outline-danger mr-3">
                    <span className="fas fa-times mr-2"></span>Hủy Bỏ
                  </Link>
                  <button type="submit" className="btn btn-outline-success">
                    <span className="fas fa-plus mr-2"></span>Lưu Lại
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemEditting : state.itemEditting
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddProduct : (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct : (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct : (product) => {
      dispatch(actUpdateProductRequest(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);