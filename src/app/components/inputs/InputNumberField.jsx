import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"


export const InputNumberField = ({ name, control, label }) => {

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField 
            {...field}  
            label={label}
            variant="outlined"
            type="number"
            sx={{ width: 210 }}
            InputProps={{ inputProps: { min: 1 } }}
            InputLabelProps={{ shrink: true }}
          />  
        )}
      />
    )

}