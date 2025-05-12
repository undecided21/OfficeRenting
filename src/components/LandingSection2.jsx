import {
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Link } from "react-router-dom";

function LandingSection2() {
  return (
    <>
      <div className="mt-50 flex justify-center">
        <div className="flex flex-col w-full max-w-[900px] md:h-[1000px] ">
          <div className="flex justify-center text-center">
            {/* title */}
            <h1 className="text-4xl text-MainBlue font-bold">
              Choose where you work comfortable with
            </h1>
          </div>
          {/* filter input */}
          <div className="flex flex-wrap gap-5 text-center justify-between mt-10 ml-10 mr-5">
            <div className="">
              <Link to="/BookOffice">
                <Button
                  variant="contained"
                  sx={{ px: 5, backgroundColor: "#6A71F1" }}
                >
                  see more
                </Button>
              </Link>
            </div>
          </div>
          {/* body */}
          <div className="mt-10">
            <div className="flex justify-center flex-wrap w-full gap-5 max-w-[900px] md:h-[800px]">
              <div className=" flex flex-col p-5 gap-2 bg-LightBlue rounded-lg">
                <img src="Room.png" className="md:h-60 " alt="" />
                {/* icon and text */}
                <div className="flex flex-wrap gap-2">
                  <img src="Vector.png" className="h-6" alt="" />
                  <p>3 Office</p>
                  <img src="Icon.png" className="h-6" alt="" />
                  <p>120 sqm</p>
                </div>
                <div className="flex justify-between">
                  <h1>cebu,10112</h1>
                  <h1 className="text-MainBlue">$22,000</h1>
                </div>
              </div>
              <div className=" flex flex-col p-5 gap-2 bg-LightBlue rounded-lg">
                <img src="Room2.png" className="md:h-60 " alt="" />
                {/* icon and text */}
                <div className="flex flex-wrap gap-2">
                  <img src="Vector.png" className="h-6" alt="" />
                  <p>3 Office</p>
                  <img src="Icon.png" className="h-6" alt="" />
                  <p>120 sqm</p>
                </div>
                <div className="flex justify-between">
                  <h1>cebu,10112</h1>
                  <h1 className="text-MainBlue">$22,000</h1>
                </div>
              </div>
              <div className=" flex flex-col p-5 gap-2 bg-LightBlue rounded-lg">
                <img src="Room3.png" className="md:h-60 " alt="" />
                {/* icon and text */}
                <div className="flex flex-wrap gap-2">
                  <img src="Vector.png" className="h-6" alt="" />
                  <p>3 Office</p>
                  <img src="Icon.png" className="h-6" alt="" />
                  <p>120 sqm</p>
                </div>
                <div className="flex justify-between">
                  <h1>cebu,10112</h1>
                  <h1 className="text-MainBlue">$22,000</h1>
                </div>
              </div>
              <div className=" flex flex-col p-5 gap-2 bg-LightBlue rounded-lg">
                <img src="Room4.png" className="md:h-60 " alt="" />
                {/* icon and text */}
                <div className="flex flex-wrap gap-2">
                  <img src="Vector.png" className="h-6" alt="" />
                  <p>3 Office</p>
                  <img src="Icon.png" className="h-6" alt="" />
                  <p>120 sqm</p>
                </div>
                <div className="flex justify-between">
                  <h1>cebu,10112</h1>
                  <h1 className="text-MainBlue">$22,000</h1>
                </div>
              </div>
              <div className=" flex flex-col p-5 gap-2 bg-LightBlue rounded-lg">
                <img src="Room5.png" className="md:h-60 " alt="" />
                {/* icon and text */}
                <div className="flex flex-wrap gap-2">
                  <img src="Vector.png" className="h-6" alt="" />
                  <p>3 Office</p>
                  <img src="Icon.png" className="h-6" alt="" />
                  <p>120 sqm</p>
                </div>
                <div className="flex justify-between">
                  <h1>cebu,10112</h1>
                  <h1 className="text-MainBlue">$22,000</h1>
                </div>
              </div>
              <div className=" flex flex-col p-5 gap-2 bg-LightBlue rounded-lg">
                <img src="Room6.png" className="md:h-60 " alt="" />
                {/* icon and text */}
                <div className="flex flex-wrap gap-2">
                  <img src="Vector.png" className="h-6" alt="" />
                  <p>3 Office</p>
                  <img src="Icon.png" className="h-6" alt="" />
                  <p>120 sqm</p>
                </div>
                <div className="flex justify-between">
                  <h1>cebu,10112</h1>
                  <h1 className="text-MainBlue">$22,000</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingSection2;
