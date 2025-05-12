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
      <div className="flex justify-center mt-10 px-4">
        <div className="flex flex-col w-full max-w-[900px]  rounded-xl bg-LightBlue p-2">
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
              pagination={true}
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                {/* slider 1 */}
                <div className="flex justify-evenly  ">
                  <div className="flex gap-4 md:gap-8 flex-wrap justify-center ">
                    <div className="flex flex-col my-8 rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center mt-5">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center font-bold mb-5 text-BlueGray">
                        Staff
                      </h1>
                      <p className="break-words text-sm  ">
                        We assure you that our staff will provide you with the
                        utmost experience and guide you in making the right
                        choice.
                      </p>
                    </div>
                    <div className="flex flex-col my-8 rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center mt-5">
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
                    <div className="flex flex-col my-8 rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center mt-5">
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
                    <div className="flex flex-col my-8 rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center mt-5">
                        <AccountBalanceWalletIcon />
                      </div>
                      <h1 className="text-center font-bold mb-5">Budget</h1>
                      <p className="break-words text-sm ">
                        We also offer budget-friendly rooms—perfect if you're
                        just getting started. Choose what suits you best and let
                        us take care of the rest.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* slider 2 */}
                <div className="flex justify-evenly  ">
                  <div className="flex gap-5 md:gap-8 flex-wrap justify-center ">
                    <div className="flex flex-col my-8 rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center mt-5">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center font-bold mb-5">Office</h1>
                      <p className="break-words text-sm text-center">
                        jkashdaskdjasbdabsdkjblaksjndjasdj
                      </p>
                    </div>
                    <div className="flex flex-col my-8 rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center mt-5">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center font-bold mb-5">Office</h1>
                      <p className="break-words text-sm text-center">
                        jkashdaskdjasbdabsdkjblaksjndjasdj
                      </p>
                    </div>
                    <div className="flex flex-col my-8 rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center mt-5">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center font-bold mb-5">Office</h1>
                      <p className="break-words text-sm text-center">
                        jkashdaskdjasbdabsdkjblaksjndjasdj
                      </p>
                    </div>
                    <div className="flex flex-col my-8 rounded-lg bg-white border-2 border-LightBlue p-5   h-72 w-48 shadow-lg hover:scale-105 duration-300 cursor-grab">
                      <div className="flex justify-center mt-5">
                        <SupervisedUserCircleIcon />
                      </div>
                      <h1 className="text-center font-bold mb-5">Office</h1>
                      <p className="break-words text-sm text-center">
                        jkashdaskdjasbdabsdkjblaksjndjasdj
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
