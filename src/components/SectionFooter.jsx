import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
function SectionFooter() {
  return (
    <>
      <footer>
        <div className="flex justify-center my-20 p-10">
          {/* icon */}
          <div className="max-w-[900px] flex gap-25">
            <div className="flex gap-3 flex-wrap">
              <div className="flex">
                <img src="Logo.svg" alt="" />
                <h1 className="pt-12 md:pt-6 ml-2 font-bold ">
                  <span className="text-MainBlue">Agile</span>Spaces
                </h1>
              </div>
              <p className="flex pt-6 mx-10">
                Agile space for more productivity{" "}
              </p>
            </div>
            <div className="flex gap-10 flex-wrap">
              {/* servces */}
              <div className="flex flex-col gap-5">
                <ul className="flex flex-col gap-4">
                  <h1 className="font-bold text-BlueGray">Services</h1>
                  <a href="">
                    <li>Booking</li>
                  </a>
                  <a href="">
                    <li>Selling</li>
                  </a>
                </ul>
              </div>
              {/* about */}
              <div className="flex flex-col gap-5">
                <ul className="flex flex-col gap-4">
                  <h1 className="font-bold text-BlueGray">About</h1>
                  <a href="">
                    <li>Booking</li>
                  </a>
                  <a href="">
                    <li>Selling</li>
                  </a>
                </ul>
              </div>
              {/* follow us */}
              <div className="flex flex-col gap-4 w-20">
                <h1 className="font-bold text-BlueGray">Follow Us</h1>
                <div className="flex gap-2">
                  <XIcon />
                  <FacebookIcon/>
                  <GitHubIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default SectionFooter;
