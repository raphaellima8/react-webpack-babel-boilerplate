import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Description.scss';

class Description extends Component {
  setMoneyMask(value) {
    const parsedValue = Number(value);
    const v = !Number.isNaN(parsedValue) ? parsedValue : 0;
    return v.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  renderPromotionalPrice(value) {
    return (
      <p className="product__promotional-price">{this.setMoneyMask(value)}</p>
    );
  }

  render() {
    return (
      <div className="product__description-container">
        <div className="product__description">
          <Link
            to={{
              pathname: '/detail',
              state: {
                selectedProduct: this.props.data
              }
            }}
          >
            <h3>{this.props.data.name}</h3>
          </Link>
          <p>
            {this.props.data.category} {this.props.data.type}
          </p>
        </div>
        <div className="product__price-container">
          <p className="product__price">
            {this.setMoneyMask(this.props.data.price)}
          </p>
          <p>por</p>
          {this.renderPromotionalPrice(this.props.data.promotionalPrice)}
        </div>
      </div>
    );
  }
}

export default Description;
