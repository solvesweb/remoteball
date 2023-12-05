import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"


export const InputDateField = ({ name, control, label }) => {

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField 
            {...field}  
            label={label}
            variant="outlined"
            type="date"
            sx={{ width: 210 }}
            InputLabelProps={{ shrink: true }}
          />  
        )}
      />
    )

}
