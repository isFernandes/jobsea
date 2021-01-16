import React, { useState } from "react";
import { IconProps, TextField } from "@material-ui/core";
// import {Icon} from "@material-ui/core";
import "./index.css";

interface InputProps {
  name?: string;
  placeholder: string;
  icon?: React.ComponentType<IconProps>;
  newValue: (arg0:string) => void;
  style?: object;
}

const InputDefault: React.FC<InputProps> = ({ icon: Icon, name, placeholder, newValue,style }) => {
  const [value, setValue] = useState("")

  const handleValueChange = (value: string) => {
    setValue(value)
  }
  return (
    <>
      <TextField
      
        variant="outlined"
        value={value}
        name={name}
        placeholder={placeholder}
        className="input"
        style={style}
        onChange={(e) => { 
          handleValueChange(e.target.value); 
          newValue(e.target.value)
        }}
      />
      <div>
        {Icon && <Icon />}
      </div>
    </>
  );
};

export default InputDefault;
