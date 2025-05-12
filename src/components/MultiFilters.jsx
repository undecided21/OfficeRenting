import React, { useEffect, useState } from "react";
import { Items } from "./Items";
import {
  Button,
  Stack,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";

export default function MultiFilters() {
  const [SelectFilters, SetSelectFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(Items);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");

  const filters = [
    "Free Coffee",
    "Free Wifi",
    "Pet Allowed",
    "Budget",
    "Free Water",
  ];

  const handleChange = (event) => {
    const value = event.target.value;

    if (value === "all") {
      // Clear all filters and show all items
      SetSelectFilters([]);
      return;
    }

    SetSelectFilters((prev) => {
      const locations = [
        "manilla",
        "Cebu",
        "BGC",
        "Cagayan",
      ];

      // Remove old value of the same type (location)
      const updated = prev.filter((item) => !locations.includes(item));

      return [...updated, value]; // Add new location
    });
  };

  const HandleFilter = (selectedCategory) => {
    if (SelectFilters.includes(selectedCategory)) {
      const updatedFilters = SelectFilters.filter(
        (el) => el !== selectedCategory
      );
      SetSelectFilters(updatedFilters);
    } else {
      SetSelectFilters([...SelectFilters, selectedCategory]);
    }
  };

  const filterItems = () => {
    if (SelectFilters.length > 0) {
      const tempItems = Items.filter((item) => {
        return (
          SelectFilters.includes(item.category) ||
          item.tagged?.some((tag) => SelectFilters.includes(tag)) ||
          SelectFilters.includes(item.capacity)
        );
      });
      setFilteredData(tempItems);
    } else {
      setFilteredData(Items);
    }
  };

  useEffect(() => {
    filterItems();
  }, [SelectFilters]);

  return (
    // container
    <div className="p-5 space-y-5 flex flex-col md:gap-20">
      {/* Filter Pannel */}
      <div className="flex justify-center">
        <div className="md:h-[20vw] md:w-[50vw] w-full h-auto px-5  rounded-lg ">
          <div>
            <div className="flex justify-start my-2">
              <h1 className="bg-MainBlue rounded-lg p-2 text-white text-3xl font-roboto font-bold  ">
                Filter Pannel:
              </h1>
            </div>
            {/* Filter Buttons */}
            <Stack
              spacing={{ xs: 1, sm: 1 }}
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap", paddingBottom: 5 }}
            >
              {filters.map((category, idx) => (
                <Button
                  key={`filters-${idx}`}
                  onClick={() => HandleFilter(category)}
                  size="small"
                  sx={{
                    backgroundColor: SelectFilters.includes(category)
                      ? " #6A71F1"
                      : "",
                  }}
                  variant={
                    SelectFilters.includes(category) ? "contained" : "outlined"
                  }
                >
                  {category}
                </Button>
              ))}
            </Stack>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Location
              </InputLabel>
              <Select
                labelId="location-label"
                id="location-select"
                value={selectedLocation}
                label="Location"
                size="small"
                onChange={(e) => {
                  setSelectedLocation(e.target.value);
                  handleChange(e); // keep your existing filtering logic
                }}
              >
                <MenuItem value="all">None</MenuItem>
                <MenuItem className="bg-MainBlue" value="Cebu">Cebu</MenuItem>
                <MenuItem value="BGC">BGC</MenuItem>
                <MenuItem value="Cagayan">Cagayan De Oro</MenuItem>
                <MenuItem value="manilla">Manilla</MenuItem>
              </Select>

              <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Capacity
              </InputLabel>
              <Select
                labelId="capacity-label"
                id="capacity-select"
                value={selectedCapacity}
                label="Capacity"
                size="small"
                onChange={(e) => {
                  setSelectedCapacity(e.target.value);
                  handleChange(e); // optional: only if capacity is also a filter
                }}
              >
                <MenuItem value="all">None</MenuItem>
                <MenuItem value="capacity1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
              </Select>

              <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
          </div>
        </div>
      </div>

      {/* Filtered Items */}
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredData.map((item, idx) => (
          <div
            key={`item-${idx}`}
            className="border-2 rounded-xl p-4 shadow hover:shadow-md transition bg-LightBlue"
          >
            <img
              src={item.image}
              alt={item.images}
              className="w-full h-80 object-cover rounded-lg mb-3"
            />

            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">{item.Title}</h2>
              <h2 className="text-lg font-semibold">Price: {item.Price}</h2>
            </div>
            <p className="text-gray-600">Location: {item.category}</p>
            <p className="text-gray-600">Capacity: {item.capacity}</p>

            {/* Filterable Tagged */}
            <p>Tag</p>
            {item.tagged && (
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tagged.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white text-xs px-2 py-1 rounded-full "
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
