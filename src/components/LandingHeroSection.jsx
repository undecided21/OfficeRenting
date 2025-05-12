import { Input, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom"

function LandingHeroSection() {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="border-b-2">
          <div className="relative">
            {/* Image with fixed height and width */}
            <img
              className="md:h-[25vw] md:w-[60vw] w-full h-auto rounded-xl object-cover"
              src="img.png"
              alt=""
            />

            {/* Overlay with opacity */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
              <h1 className="text-4xl font-bold text-white mb-2">
                A quiet environment
              </h1>
              <p className="text-4xl font-bold text-white mb-2">
                is best for staying focused.
              </p>
              <div className="my-5">
                <Input
                  variant="filled"
                  placeholder=""
                  sx={{
                    width: 350,
                    borderRadius: 2,
                    padding: 1,
                    backgroundColor: "#ffffff",
                    "& .MuiInputBase-input::placeholder": {
                      color: "Black", // Set your desired placeholder color
                      opacity: 1, // Ensure the placeholder is fully visible
                    },
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Link to="/BookOffice">
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#6A71F1",
                          }}
                        >
                          <SearchIcon /> <h1 className="font-bold">Search</h1>
                        </Button>
                      </Link>
                    </InputAdornment>
                  }
                />
              </div>
            </div>
          </div>

          {/* Trusted by Section */}
          <div className="flex justify-center my-10">
            <h1 className="text-black/30 text-2xl font-bold">Trusted by</h1>
          </div>

          {/* Client Logos */}
          <div className="flex justify-center my-10 gap-5">
            <img src="Client Logo 1.png" alt="" className="h-[3vw]" />
            <img src="Client Logo 2.png" alt="" className="h-[3vw]" />
            <img src="Client Logo 3.png" alt="" className="h-[3vw]" />
            <img src="Client Logo 4.png" alt="" className="h-[3vw]" />
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingHeroSection;
