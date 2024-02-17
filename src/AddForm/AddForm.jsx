import React, { forwardRef, useRef } from "react";
import "./AddForm.css";

const AddForm = (props) => {
  const formRef = useRef();
  const formValue = (event) => {
    event.preventDefault();
    let formDataProduct = new FormData(formRef.current);
    const newProduct = Array.from(formDataProduct.entries()).reduce(
      (obj, [key, value]) => ({ ...obj, [key]: value }),
      {},
    );
    props.addProduct(newProduct);
  };
  return (
    <div className="wrapper-form">
      <form onSubmit={formValue} className="add-product" ref={formRef}>
        <input
          name="title"
          type="text"
          className="title-feild"
          placeholder="Введите заголовок"
        />
        <input
          name="description"
          type="text"
          className="description-feild"
          placeholder="Введите описание"
        />
        <button
          type="submit"
          className="form-action"
          // onClick={props.addProduct}
        >
          отправить
        </button>
      </form>
    </div>
  );
};

export default AddForm;
