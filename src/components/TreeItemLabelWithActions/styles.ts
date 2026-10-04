import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface ICustomTextFieldProps {
  $isLoadingUpdate: boolean
}

export const Container = styled(Box)`
  && {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const StretchedLink = styled.a`
  z-index: 1;
  position: absolute;
  inset: 0;
  text-decoration: none;
`

export const CustomTextField = styled(TextField) <ICustomTextFieldProps>`
  && input {
    padding: 2px 8px;
    font-size: 16px;
  }
  && :not(input:focus) + fieldset {
    border: none;
  }
  pointer-events: none;
  flex-grow: 1;
`

export const ActionsBox = styled(Box)`
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`
