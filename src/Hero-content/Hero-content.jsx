import "./hero-content.css";
import MyAlert from "../MyAlert/MyAlert";
import Button from "../Button/Button";
import { SlDiamond, SlLike } from "react-icons/sl";
import { ButtonTwo } from "../Button/ButtonTwo";
import { useEffect, useRef, useState } from "react";

const HeroContent = () => {
  const [title, setTitle] = useState("begine");
  const [isready, setIsReady] = useState(false);
  const [isready1, setIsReady1] = useState(false);
  const [isready2, setIsReady2] = useState(false);
  const [isready3, setIsReady3] = useState(false);
  const action = () => {
    setTitle("end");
    setIsReady(!isready);
    console.log(myRef.current.value);
  };
  const action1 = () => {
    setTitle("end1");
    setIsReady1(!isready1);
  };
  const action2 = () => {
    setTitle("end2");
    setIsReady2(!isready2);
  };
  const action3 = () => {
    setTitle("end3");
    setIsReady3(!isready3);
  };
  useEffect(() => {
    console.log("функциональный компонент вм-didmount");
    return () => {
      console.log("функциональный компонент размонтирован");
    };
  }, []);
  useEffect(() => {
    console.log("функциональная компонента обновилась", isready);
  }, [isready]);
  const myRef = useRef();
  const myArray = [1, 2, 3];

  const myComponents = myArray.map((item) => {
    return <div>{item}</div>;
  });
  return (
    <div className="hero-content">
      {myComponents}
      {isready && (
        <MyAlert title={"кнопка-1"} description={"error-style"} type="error" />
      )}
      {/* {isready1 && (
        <MyAlert
          title={"кнопка-2"}
          description={"primary-style"}
          type="primary"
        />
      )}
      {isready2 && (
        <MyAlert
          title={"кнопка-3"}
          description={"success-style"}
          type="success"
        />
      )}
      {isready3 && (
        <MyAlert
          title={"кнопка-4"}
          description={"alerta-style"}
          type="warning"
        />
      )} */}
      <Button type="error" click="нажатие" action={action} icon={<SlLike />} />

      {/* <Button
        type="primary"
        click="нажатие-1"
        action={action1}
        icon={<SlLike />}
      />
      <Button
        type="btn-default"
        click="нажатие-3"
        action={action2}
        icon={<SlLike />}
      />
      <Button
        type="warning"
        click="нажатие-4"
        action={action3}
        icon={<SlLike />}
      /> */}
      <ButtonTwo />
      <input ref={myRef} />
    </div>
  );
};

export default HeroContent;
