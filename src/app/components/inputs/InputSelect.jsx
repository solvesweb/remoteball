import { Select } from "@mui/material"
import { Controller } from "react-hook-form"

export const InputSelect = ({ name, control, label, options }) => {
  return (
    <Controller
     name={name}
     control={control}
     render={({ field }) => (
       <Select {...field} label={label} variant="outlined" sx={{ width: 210 }}>
         {options.map((option) => (
           <option key={option.value} value={option.value}>
             {option.label}
           </option>
         ))}
        
       </Select>
     )}
    />
  )
}
