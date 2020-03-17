import React from 'react';
import { Link } from 'gatsby';
import Button from '../../../../components/Elements/Button';
import Input from '../../../../components/Elements/Input';

function OrderForm() {
  return (
    <div className="order_form">
      <Input placeholder={'Ваше имя'} type={'name'} />
      <Input placeholder={'Ваш email'} type={'email'} />
      <Link to={'#confirm'}>
        <Button>Сделать заказ</Button>
      </Link>
    </div>
  );
}

export default OrderForm;
