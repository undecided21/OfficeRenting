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

  // Tag filter only (for buttons)
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

  // Actual filtering logic
  const filterItems = () => {
    let tempItems = Items;

    // Location filtering
    if (selectedLocation && selectedLocation !== "all") {
      tempItems = tempItems.filter(
        (item) => item.category.toLowerCase() === selectedLocation.toLowerCase()
      );
    }

    // Capacity filtering
    if (selectedCapacity && selectedCapacity !== "all") {
      tempItems = tempItems.filter(
        (item) => parseInt(item.capacity) === parseInt(selectedCapacity)
      );
    }

    // Tagged filters
    if (SelectFilters.length > 0) {
      tempItems = tempItems.filter((item) =>
        SelectFilters.every((filter) => item.tagged?.includes(filter))
      );
    }

    setFilteredData(tempItems);
  };

  useEffect(() => {
    filterItems();
  }, [SelectFilters, selectedLocation, selectedCapacity]);

  return (
    <div className="p-5 space-y-5 flex flex-col md:gap-20">
      {/* Filter Panel */}
      <div className="flex justify-center">
        <div className="md:h-[20vw] md:w-[50vw] w-full h-auto px-5 rounded-lg ">
          <div>
            <div className="flex justify-start my-2">
              <h1 className="bg-MainBlue rounded-lg p-2 text-white text-3xl font-roboto font-bold">
                Filter Panel:
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

            {/* Location Select */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Location</InputLabel>
              <Select
                value={selectedLocation}
                label="Location"
                size="small"
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="Cebu">Cebu</MenuItem>
                <MenuItem value="BGC">BGC</MenuItem>
                <MenuItem value="Cagayan">Cagayan De Oro</MenuItem>
                <MenuItem value="manilla">Manilla</MenuItem>
              </Select>
              <FormHelperText>Select office location</FormHelperText>
            </FormControl>

            {/* Capacity Select */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Capacity</InputLabel>
              <Select
                value={selectedCapacity}
                label="Capacity"
                size="small"
                onChange={(e) => setSelectedCapacity(e.target.value)}
              >
                <MenuItem value="all">All</MenuItem>
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Choose how many people</FormHelperText>
            </FormControl>
          </div>
        </div>
      </div>

      {/* Filtered Items */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, idx) => (
            <div
              key={`item-${idx}`}
              className="border-2 rounded-xl p-4 shadow hover:shadow-md transition bg-LightBlue"
            >
              <img
                src={item.image}
                alt={item.images}
                className="w-full md:h-80 object-cover rounded-lg mb-3"
              />
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">{item.Title}</h2>
                <h2 className="text-lg font-semibold">Price: {item.Price}</h2>
              </div>
              <p className="text-gray-600">Location: {item.category}</p>
              <p className="text-gray-600">Capacity: {item.capacity}</p>

              {/* Tags */}
              {item.tagged && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tagged.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}
