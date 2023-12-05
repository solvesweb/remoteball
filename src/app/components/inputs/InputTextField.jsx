import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"


export const InputTextField = ({ name, control, label }) => {

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField 
            {...field}  
            label={label}
            variant="outlined"
            type="text"
            sx={{ width: 210 }}
            autoComplete="off"
          />  
        )}
      />
    )

}
