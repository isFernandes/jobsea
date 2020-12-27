import React, { useState } from "react";
import { IconProps, TextField } from "@material-ui/core";
// import {Icon} from "@material-ui/core";
import "./index.css";

interface InputProps {
  name?: string;
  placeholder: string;
  icon?: React.ComponentType<IconProps>;
}

const InputDefault: React.FC<InputProps> = ({ icon: Icon, name, placeholder, }) => {
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
        style={{ minWidth: "100%" }}
        onChange={(e) => { handleValueChange(e.target.value)}}
      />
      <div>
        {Icon && <Icon />}
      </div>
    </>
  );
};

export default InputDefault;
