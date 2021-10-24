export interface PicturesInterface {
  value: string
}

export interface HandlerFuncInterface {
  (name: string): void;
}

export interface StepArrayInterface {
  value: string ;
  name: string
}

export interface StepComponentInterface {
  stepArray: StepArrayInterface,
  handlerFunc: HandlerFuncInterface
}

export interface AddNewStepInterface {
  (arrayStep: StepArrayInterface[], nameStep: string, valueCurrentStep: string): StepArrayInterface[];
}

export interface CheckWinnerInterface {
  (victoryCombinations:
     (string[])[], arrayStep: StepArrayInterface[], valueCurrentStep: string, nameStep: string, addNewStep: AddNewStepInterface):
    string[] | undefined;
}

export interface GetStepsCurrentUserInterface {
  (addNewStep: AddNewStepInterface, valueCurrentStep: string, nameStep: string, arrayStep: StepArrayInterface[]): string[]
}

export interface CheckClickToClearFieldInterface {
  (arrayStep: StepArrayInterface[], nameStep: string): StepArrayInterface | undefined
}

export type Dispatch<A> = (value: A) => void;