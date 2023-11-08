import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { green, orange, red } from "@mui/material/colors";

export default function ToggleButtonDecision() {
  const [selected, setSelected] = useState(null);

  const handleChange = (e, newSelected) => {
    setSelected(newSelected);
  };

  return (
    <ToggleButtonGroup value={selected} exclusive onChange={handleChange}>
      <ToggleButton
        style={{
          backgroundColor: selected === "fichar" ? green[500] : undefined,
        }}
        value="fichar"
      >
        Fichar
      </ToggleButton>

      <ToggleButton
        style={{
          backgroundColor: selected === "seguir" ? orange[500] : undefined,
        }}
        value="seguir"
      >
        Seguir
      </ToggleButton>

      <ToggleButton
        style={{
          backgroundColor: selected === "descartar" ? red[500] : undefined,
        }}
        value="descartar"
      >
        Descartar
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
