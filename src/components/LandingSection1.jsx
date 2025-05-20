import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function LandingSection() {
  return (
    <>
      {/* Body */}
      <div className="flex justify-center mt-10 md:px-4">
        <div className="flex flex-col w-full max-w-[1000px] h-auto  rounded-xl bg-LightBlue md:p-2">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6">
            <div className="flex flex-col text-black">
              <p className="font-bold font-montserrat text-BlueGray">
                SERVICES
              </p>
              <h1 className="font-bold font-montserrat text-BlueGray text-2xl">
                What we offer
              </h1>
              <p className="font-medium font-montserrat text-BlueGray">
                Here are the details to help you understand everything you need
                to know about us.
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Button variant="contained" sx={{ backgroundColor: "#6A71F1" }}>
                Show more
              </Button>
            </div>
          </div>
          <div className="">
            {/* Slider */}
            <Swiper
              modules={[Pagination]}
              pagination={{
                dynamicBullets: true,
              }}
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                {/* slider 1 */}
                <div className="flex justify-evenly  ">
                  <div className="flex md:gap-5 sm:gap-4 gap-3 flex-wrap pb-8 justify-center ">
                    <div className="flex flex-col rounded-lg  bg-white border-2 border-LightBlue p-5 w-40   md:h-72 md:w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center ">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center md:font-bold mb-5 text-BlueGray">
                        Staff
                      </h1>
                      <p className="break-words md:text-sm text-xs text-[10px]">
                        We assure you that our staff will provide you with the
                        utmost experience and guide you in making the right
                        choice.
                      </p>
                    </div>

                    <div className="flex flex-col rounded-lg  bg-white border-2 border-LightBlue p-5 w-40   md:h-72 md:w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center ">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center md:font-bold mb-5 text-BlueGray">
                        Staff
                      </h1>
                      <p className="break-words md:text-sm text-xs text-[10px]">
                        We assure you that our staff will provide you with the
                        utmost experience and guide you in making the right
                        choice.
                      </p>
                    </div>

                    <div className="flex flex-col rounded-lg  bg-white border-2 border-LightBlue p-5 w-40   md:h-72 md:w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center ">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center md:font-bold mb-5 text-BlueGray">
                        Staff
                      </h1>
                      <p className="break-words md:text-sm text-xs text-[10px]">
                        We assure you that our staff will provide you with the
                        utmost experience and guide you in making the right
                        choice.
                      </p>
                    </div>

                    <div className="flex flex-col rounded-lg  bg-white border-2 border-LightBlue p-5 w-40   md:h-72 md:w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center ">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center md:font-bold mb-5 text-BlueGray">
                        Staff
                      </h1>
                      <p className="break-words md:text-sm text-xs text-[10px]">
                        We assure you that our staff will provide you with the
                        utmost experience and guide you in making the right
                        choice.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* slider 2 */}

                <div className="flex justify-evenly  ">
                  <div className="flex md:gap-5 sm:gap-4 gap-3 flex-wrap pb-8 justify-center ">
                    <div className="flex flex-col rounded-lg  bg-white border-2 border-LightBlue p-5 w-40   md:h-72 md:w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center ">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center md:font-bold mb-5 text-BlueGray">
                        Staff
                      </h1>
                      <p className="break-words md:text-sm text-xs text-[10px]">
                        We assure you that our staff will provide you with the
                        utmost experience and guide you in making the right
                        choice.
                      </p>
                    </div>

                    <div className="flex flex-col rounded-lg  bg-white border-2 border-LightBlue p-5 w-40   md:h-72 md:w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center ">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center md:font-bold mb-5 text-BlueGray">
                        Staff
                      </h1>
                      <p className="break-words md:text-sm text-xs text-[10px]">
                        We assure you that our staff will provide you with the
                        utmost experience and guide you in making the right
                        choice.
                      </p>
                    </div>

                    <div className="flex flex-col rounded-lg  bg-white border-2 border-LightBlue p-5 w-40   md:h-72 md:w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center ">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center md:font-bold mb-5 text-BlueGray">
                        Staff
                      </h1>
                      <p className="break-words md:text-sm text-xs text-[10px]">
                        We assure you that our staff will provide you with the
                        utmost experience and guide you in making the right
                        choice.
                      </p>
                    </div>

                    <div className="flex flex-col rounded-lg  bg-white border-2 border-LightBlue p-5 w-40   md:h-72 md:w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center ">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center md:font-bold mb-5 text-BlueGray">
                        Staff
                      </h1>
                      <p className="break-words md:text-sm text-xs text-[10px]">
                        We assure you that our staff will provide you with the
                        utmost experience and guide you in making the right
                        choice.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingSection;

{
  /* <div className="flex flex-col  rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center">
                        <VerifiedUserIcon />
                      </div>
                      <h1 className="text-center font-bold mb-5 text-BlueGray">
                        Privacy
                      </h1>
                      <p className="break-words text-sm ">
                        We take your privacy seriously—any data you share or
                        consultations you make are kept strictly confidential
                        and never recorded.
                      </p>
                    </div>
                    <div className="flex flex-col  rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center ">
                        <RoomPreferencesIcon />
                      </div>
                      <h1 className="text-center font-bold mb-5 text-BlueGray">
                        Preference
                      </h1>
                      <p className="break-words text-sm ">
                        We understand that client preferences matter. That’s why
                        we offer a wide range of options, and our staff is
                        dedicated to providing you with the best experience
                      </p>
                    </div>
                    <div className="flex flex-col  rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center ">
                        <AccountBalanceWalletIcon />
                      </div>
                      <h1 className="text-center font-bold mb-5">Budget</h1>
                      <p className="break-words text-sm ">
                        We also offer budget-friendly rooms—perfect if you're
                        just getting started. Choose what suits you best and let
                        us take care of the rest.
                      </p>
                    </div> */
}
