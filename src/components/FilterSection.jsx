import { useState } from "react";
import {
  Button,
  Stack,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";

function FilterSection() {

  
  const [activeButtons, setActiveButtons] = useState([]);
  const [activeLocations, setActiveLocations] = useState({
    select1: [], // Store values for Select 1
    select2: [], // Store values for Select 2
    select3: [], // Store values for Select 3
  });

  const handleChange = (event, selectName) => {
  const value = event.target.value;

  SetSelectFilters((prev) => {
    const locations = ["Metro Manila", "Cebu", "Davao", "Makati", "BGC", "Cagayan"];

    // Remove old value of the same type (location)
    const updated = prev.filter((item) => !locations.includes(item));

    return [...updated, value]; // Add new location
  });
};

  
  const handleClick = (buttonId) => {
    setActiveButtons(
      (prev) =>
        prev.includes(buttonId)
          ? prev.filter((id) => id !== buttonId) // remove if already active
          : [...prev, buttonId] // add if not active
    );
  };

  return (
    <>
      <div className="my-10">
        {/* Filter Container */}
        <div className="flex justify-center ">
          <div className="md:h-[25vw] md:w-[60vw] w-full h-auto px-5  rounded-lg">
            <div className="flex justify-start my-2">
              <h1 className="bg-MainBlue rounded-lg p-2 text-white text-3xl font-roboto font-bold  ">
                Filter Pannel:
              </h1>
            </div>
            {/* Filter Button Category */}
            <Stack
              spacing={{ xs: 1, sm: 0.5, }}
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap" , paddingBottom: 5}}
            >
              <Button
                size="small"
                variant={
                  activeButtons.includes("Wifi") ? "contained" : "outlined"
                }
                onClick={() => handleClick("Wifi")}
                sx={{
                  backgroundColor: activeButtons.includes("Wifi")
                    ? " #6A71F1"
                    : "",
                }}
              >
                High-speed Wi-Fi
              </Button>

              <Button
                size="small"
                variant={
                  activeButtons.includes("Coffe") ? "contained" : "outlined"
                }
                onClick={() => handleClick("Coffe")}
                sx={{
                  backgroundColor: activeButtons.includes("Coffe")
                    ? " #6A71F1"
                    : "",
                }}
              >
                Free Coffee/Tea
              </Button>

              <Button
                size="small"
                variant={
                  activeButtons.includes("Printer") ? "contained" : "outlined"
                }
                onClick={() => handleClick("Printer")}
                sx={{
                  backgroundColor: activeButtons.includes("Printer")
                    ? " #6A71F1"
                    : "",
                }}
              >
                Printing/Scanning
              </Button>

              <Button
                size="small"
                variant={
                  activeButtons.includes("Projector") ? "contained" : "outlined"
                }
                onClick={() => handleClick("Projector")}
                sx={{
                  backgroundColor: activeButtons.includes("Projector")
                    ? " #6A71F1"
                    : "",
                }}
              >
                Projector/TV
              </Button>

              <Button
                size="small"
                variant={
                  activeButtons.includes("WhiteBoard") ? "contained" : "outlined"
                }
                onClick={() => handleClick("WhiteBoard")}
                sx={{
                  backgroundColor: activeButtons.includes("WhiteBoard")
                    ? " #6A71F1"
                    : "",
                }}
              >
                Whiteboard
              </Button>

              <Button
                size="small"
                variant={
                  activeButtons.includes("Aircon") ? "contained" : "outlined"
                }
                onClick={() => handleClick("Aircon")}
                sx={{
                  backgroundColor: activeButtons.includes("Aircon")
                    ? " #6A71F1"
                    : "",
                }}
              >
                Air Conditioning
              </Button>

              <Button
                size="small"
                variant={
                  activeButtons.includes("Pet") ? "contained" : "outlined"
                }
                onClick={() => handleClick("Pet")}
                sx={{
                  backgroundColor: activeButtons.includes("Pet")
                    ? " #6A71F1"
                    : "",
                }}
              >
                Pet-Friendly
              </Button>

              <Button
                size="small"
                variant={
                  activeButtons.includes("PWD-friendly") ? "contained" : "outlined"
                }
                onClick={() => handleClick("PWD-friendly")}
                sx={{
                  backgroundColor: activeButtons.includes("PWD-friendly")
                    ? " #6A71F1"
                    : "",
                }}
              >
                Accessible PWD-friendly
              </Button>

              <Button
                size="small"
                variant={
                  activeButtons.includes("Near Public Transit") ? "contained" : "outlined"
                }
                onClick={() => handleClick("Near Public Transit")}
                sx={{
                  backgroundColor: activeButtons.includes("Near Public Transit")
                    ? " #6A71F1"
                    : "",
                }}
              >
                Near Public Transit
              </Button>

              <Button
                size="small"
                variant={
                  activeButtons.includes("Eco-friendly") ? "contained" : "outlined"
                }
                onClick={() => handleClick("Eco-friendly")}
                sx={{
                  backgroundColor: activeButtons.includes("Eco-friendly")
                    ? " #6A71F1"
                    : "",
                }}
              >
                Eco-friendly
              </Button>
            </Stack>
            {/* Select 1 */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Location
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={activeLocations.select1}
                label="Location"
                size="small"
                onChange={(event) => handleChange(event, "select1")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Metro Manila">Metro Manila</MenuItem>
                <MenuItem value="Cebu">Cebu</MenuItem>
                <MenuItem value="Davao">Davao</MenuItem>
                <MenuItem value="Makati">Makati</MenuItem>
                <MenuItem value="BGC">BGC</MenuItem>
                <MenuItem value="Cagayan">Cagayan De Oro</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
            
            {/* Select2 */}
            
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Capacity
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={activeLocations.select2}
                label="Location"
                size="small"
                onChange={(event) => handleChange(event, "select2")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Single</MenuItem>
                <MenuItem value={2}>Double</MenuItem>
                <MenuItem value={3}>3 People</MenuItem>
                <MenuItem value={6}>6 People</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>

            {/* Select3 */}

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Office Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={activeLocations.select3}
                label="Location"
                size="small"
                onChange={(event) => handleChange(event, "select3")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Private">Private Office</MenuItem>
                <MenuItem value="Meeting">Meeting Office</MenuItem>
                <MenuItem value="Coworking">Coworking Desk / Hot Desk</MenuItem>
                <MenuItem value="Dedicated">Dedicated Desk</MenuItem>
                <MenuItem value="Virtual">Virtual Office</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>

          </div>
        </div>
      </div>
    </>
  );
}
export default FilterSection;
