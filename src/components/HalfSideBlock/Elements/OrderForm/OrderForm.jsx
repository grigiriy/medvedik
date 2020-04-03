import React from 'react';
import Button from '../../../../components/Elements/Button';
import Input from '../../../../components/Elements/Input';

function OrderForm() {
  return (
    <form className="order_form" action="">
      <Input placeholder={'Ваше имя'} type={'name'} />
      <Input placeholder={'Ваш email'} type={'email'} />
      <Button>Сделать заказ</Button>
    </form>
  );
}

export default OrderForm;
