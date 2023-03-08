import { TextField } from '@mui/material';
import styled from 'styled-components';


export const StyledTextField = styled(TextField)`
  && {
    & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: none;
      border: none;
      outline: none;
    }
  }
  && {
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: none;
        border: none;
        outline: none;
    }
  }
  && {
    & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
      border-color: none;
      border: none;
      outline: none;
    }
  }
`;