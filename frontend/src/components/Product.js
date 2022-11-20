import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import { listProductDetails } from '../actions/productActions';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(product);

  const goToProductHandler = () => {
    dispatch(listProductDetails(product._id));
    // setTimeout(() => {
    navigate(`/product/${product._id}`);
    // }, 50);
  };

  return (
    <Card.Link
      className='card-link-custom'
      onClick={goToProductHandler}
      href='#'
    >
      <Card border='light' className='p-3' key={product._id}>
        <Card.Img
          src={product.image}
          variant='top'
          className='card-img-custom'
        />

        <Card.Body>
          {product && (
            <Card.Text as='h6'>
              <i className='fas fa-location-dot'></i> {product.user.city},{' '}
              {product.user.district}
            </Card.Text>
          )}

          <Card.Title as='h6' className='card-title-custom'>
            {product.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </Card.Link>
  );
};

export default Product;
