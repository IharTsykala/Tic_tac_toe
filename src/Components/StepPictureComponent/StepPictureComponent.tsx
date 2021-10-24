import React, {FC} from 'react';
import {PicturesInterface} from "../../Interfaces/CommonInterfaces";

const StepPictureComponent: FC<PicturesInterface> = ({ value}) =>
  <div className={`${value}_container`}>{value}</div>


export default StepPictureComponent;
