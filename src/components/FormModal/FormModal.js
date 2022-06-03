import { Form, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

const FormModal = (props) => {
  const {
    form,
    modalTitle,
    formName,
    isVisible,
    handleOk,
    handleCancel,
    defaultValue,
    children,
    ...prop
  } = props;
  return (
    <Modal
      title={modalTitle}
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelText="Cancel"
      {...prop}
    >
      <Form
        form={form}
        layout="vertical"
        name={formName}
        initialValues={defaultValue}
      >
        {children}
      </Form>
    </Modal>
  );
};

export default FormModal;
