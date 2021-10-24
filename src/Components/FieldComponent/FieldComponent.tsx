import React, {FC} from 'react';
import {StepComponentInterface} from "../../Interfaces/CommonInterfaces";
import StepPictureComponent from "../StepPictureComponent/StepPictureComponent";

const FieldComponent: FC<StepComponentInterface> = ({stepArray:{value, name}, handlerFunc: handlerOnClick}) =>
  <div className={`step_container ${name}`} onClick={()=>handlerOnClick(name)}>
    <StepPictureComponent value={value}/>
  </div>

export default FieldComponent;