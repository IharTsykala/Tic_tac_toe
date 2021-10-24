import React, {useState} from 'react';
import FieldComponent from '../FieldComponent/FieldComponent';
import {
  HandlerFuncInterface,
  StepArrayInterface
} from "../../Interfaces/CommonInterfaces";
import {getArrayFields, victoryCombinations} from "../../data/data";
import {
  addNewStep,
  checkClickToClearField,
  checkValueNextStep,
  checkWinner,
  getStatusGame
} from "../../services/commonLogic";

const ContainerComponent = () => {
  const [statusGame, setStatusGame] = useState(true)
  const [titleStep, setTitleStep] = useState("your step:")
  const [valueNextStep, setValueNextStep] = useState("x")
  const [arrayStep, setArrayStep] = useState(getArrayFields())

  const handlerOnClick:HandlerFuncInterface = (nameStep) => {
    if(checkClickToClearField(arrayStep, nameStep) && statusGame) {
      const statusWinner = checkWinner(victoryCombinations, arrayStep, valueNextStep, nameStep, addNewStep)
      setArrayStep(addNewStep(arrayStep, nameStep, valueNextStep))
      setValueNextStep(checkValueNextStep(valueNextStep, statusWinner))
      getStatusGame(setTitleStep, statusWinner, setStatusGame)
    }
  }

  return <div className={"container"}>
    <div className={"title_step"}>{`${titleStep} ${valueNextStep}`}</div>
    <div className={"container_array_step"}>
      {arrayStep.map(({ name, value }:StepArrayInterface) =>
        <FieldComponent stepArray={{name, value}} handlerFunc={handlerOnClick}/>)}
    </div>
  </div>
}

export default ContainerComponent
