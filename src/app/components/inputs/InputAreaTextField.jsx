import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"


export const InputAreaTextField = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{ width: "full" }}
          autoComplete="off"
        />
      )}
    />
  )
}
