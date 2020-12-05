import React from "react";
import "./button.css";
import BB from "@material-ui/core/Button";

export const MyButton = (props: any) => (
  <div>
    <BB variant="contained" color="primary" {...props}>
      {props.label}
    </BB>
  </div>
);
