import React, { FC } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

interface IField {
  className: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string;
  name: string;
}

const Field: FC<IField> = ({
  className,
  label,
  value,
  error,
  helperText,
  onChange,
  name,
}) => {
  return (
    <Box className={"marg"}>
      <TextField
        className={className}
        label={label}
        variant="outlined"
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
      />
    </Box>
  );
};

export default Field;
