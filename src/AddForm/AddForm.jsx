import React, { useRef } from "react";
import { useState } from "react";
import "./AddForm.css";

const arrayPlus = (item, blfbla) => {
  console.log(item, blfbla);
  return item + " test";
};

const AddForm = () => {
  const formRef = useRef();
  const [isfield, setField] = useState([]);
  const formValue = (event) => {
    event.preventDefault();
    let formDataProduct = new FormData(formRef.current);
    for (const pair of formDataProduct.entries()) {
      const formField = { [pair[0]]: pair[1] };
      isfield.push(formField);
    }
    setField([isfield]);
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
        <button type="submit" className="form-action">
          отправить
        </button>
      </form>
    </div>
  );
};

export default AddForm;
