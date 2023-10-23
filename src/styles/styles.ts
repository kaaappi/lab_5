import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#c4c8ed",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #c4c8ed",
    },
    "& .MuiOutlinedInput-input": {
      color: "#c4c8ed",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#c4c8ed",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#c4c8ed",
    },
    "& .MuiInputLabel-outlined": {
      color: "#c4c8ed",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#c4c8ed",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#c4c8ed",
    },
  },
});

export default useStyles;
