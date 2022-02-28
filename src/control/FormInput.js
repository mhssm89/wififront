import { FormControl, FormHelperText, TextField } from "@material-ui/core";

import { useController, useFormContext } from "react-hook-form";

import { errorHandler } from "./utils";

function FormInput({
  name,
  label = "",
  helperText = "",
  errorObj = {},
  ...props
}) {
  const { control } = useFormContext();
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
  });
  const { isError, errorMessage } = errorHandler(name, errorObj);

  return (
    <FormControl fullWidth error={isError}>
      <TextField
        {...inputProps}
        inputRef={ref}
        label={label}
        fullWidth
        error={isError}
        {...props}
      />
      {(helperText || isError) && (
        <FormHelperText error={isError}>
          {isError ? errorMessage : helperText}
        </FormHelperText>
      )}
      {/* {isError && <FormHelperText error>{errorMessage}</FormHelperText>} */}
    </FormControl>
  );
}

export default FormInput;
