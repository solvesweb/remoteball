import { InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

export const InputSelect = ({ name, control, label, options }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <InputLabel sx={{ mb: 1 }}>{label}</InputLabel>
          <Select
            {...field}
            label={label}
            variant="outlined"
            sx={{ width: 210 }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    />
  );
};
