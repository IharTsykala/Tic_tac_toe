import {
  AddNewStepInterface, CheckClickToClearFieldInterface,
  CheckWinnerInterface, Dispatch,
  GetStepsCurrentUserInterface,
  StepArrayInterface
} from "../Interfaces/CommonInterfaces";

export const addNewStep: AddNewStepInterface = (arrayStep, nameStep, valueCurrentStep) =>
  arrayStep.map(({ name, value }:StepArrayInterface) =>
    ({name,
      value: name === nameStep
        ?valueCurrentStep
        :value
    }))

const getStepsCurrentUser: GetStepsCurrentUserInterface = (addNewStep, valueCurrentStep, nameStep, arrayStep) =>
  addNewStep(arrayStep, nameStep, valueCurrentStep).filter(({value}: StepArrayInterface) =>
    value === valueCurrentStep).map(({name}: StepArrayInterface) => name)

export const checkWinner: CheckWinnerInterface = (victoryCombinations, arrayStep,
  valueCurrentStep, nameStep, addNewStep) =>
  victoryCombinations.find((combination: string[]) =>
    getStepsCurrentUser(addNewStep, valueCurrentStep, nameStep, arrayStep).toString().includes(combination.toString()))

export const checkClickToClearField: CheckClickToClearFieldInterface = (arrayStep, nameStep) =>
  arrayStep.find(({name, value}: StepArrayInterface) => name === nameStep && !value)

export const checkValueNextStep = (valueCurrentStep: string,  checkWinnerResult: string[] | undefined) =>
  !checkWinnerResult
    ? valueCurrentStep === "x"
      ? "o"
      : "x"
    :valueCurrentStep

export const getStatusGame = (setTitleStep: Dispatch<string>, checkWinnerResult: string[] | undefined, setStatusGame: Dispatch<boolean>) => {
  if(checkWinnerResult) {
    setTitleStep("You are winner:")
    setStatusGame(false)
  }
}