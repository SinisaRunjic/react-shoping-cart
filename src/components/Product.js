import React, { Component } from 'react';
import formatCurrency from "../util";
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        }
    }

    openModal = (product) => {
        this.setState({ product });
    };
    closeModal = () => {
        this.setState({ product: null })
    }
    render() {
        const { product } = this.state
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <Flip right>
                            <li key={product._id}>
                                <div className="product">
                                    <a href={'#' + product._id} onClick={() => this.openModal(product)}>
                                        <img src={product.image} alt={product.title}></img>
                                        <p>
                                            {product.title}
                                        </p>
                                    </a>
                                    <div className="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button className="button primary" onClick={() => this.props.addToCart(product)}>Add To Cart</button>
                                    </div>
                                </div>
                            </li>
                        </Flip>
                    ))}
                </ul>
                {product && (
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <Zoom>
                            <button className="close-modal" onClick={this.closeModal}>
                                X
                            </button>
                            <div className="product-details">
                                <img src={product.image} alt={product.title}></img>
                                <div className="product-details-description">
                                    <p>
                                        <strong>{product.title}</strong>
                                    </p>
                                    <p>
                                        {product.description}
                                    </p>
                                    <p>
                                        Available Sizes:{" "}
                                        {product.availableSizes.map((item) => (
                                            <span>
                                                {" "}
                                                <button className="button">{item}</button>
                                            </span>
                                        ))}
                                    </p>
                                    <div className="product-price">
                                        <div>{formatCurrency(product.price)}</div>
                                        <button className='button primary' onClick={() => {
                                            this.props.addToCart(product)
                                            this.closeModal()
                                        }}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )}
            </div>
        );
    }
}

export default Product;