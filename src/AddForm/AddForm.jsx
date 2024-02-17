import React, { forwardRef } from "react";
import "./AddForm.css";

const AddForm = forwardRef((props, ref) => {
  return (
    <div className="wrapper-form">
      <form onSubmit={props.onSubmit} className="add-product" ref={ref}>
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
});

export default AddForm;
