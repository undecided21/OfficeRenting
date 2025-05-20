import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function LandingSection3() {

  // useEffect(() => {
  //   // Scroll to top of page on route change
  //   window.scrollTo(0, 0);
  // }, [Link]);

  return (
    <>
      <div className="flex justify-center mt-25 mb-10">
        {/* title */}
        <h1 className="text-4xl text-MainBlue font-bold">Job Aplication</h1>
      </div>
      <div className="flex justify-center mb-16 ">
        <div className="flex flex-wrap max-w-[900px] md:h-[400px] justify-center">
          {/* img */}
          <div className="">
            <img src="image chair.png " className="md:w-[450px]" alt="" />
          </div>
          {/* Content */}
          <div className="flex flex-col md:w-[400px] m-5">
            <h1 className="text-4xl text-BlueGray font-bold">
              Why working with us?
            </h1>
            <p className="break-words font-bold text-lg md:text-3xl text-black/30">
              Working with us as a startup job company offers benefits not just
              from our side, but for you as well—because with enough
              determination, anything is possible.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl text-BlueGray">Steps:</h1>
      </div>
      <div className="flex justify-center mt-10">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ width: 24, height: 24 }} color="warning" />
              <TimelineConnector sx={{ height: 30 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ fontSize: "1.1rem" }}>
              Submit your portfolio
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ width: 24, height: 24 }} color="warning" />
              <TimelineConnector sx={{ height: 30 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ fontSize: "1.1rem" }}>
              Prepare for the Interview
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ width: 24, height: 24 }} color="warning" />
              <TimelineConnector sx={{ height: 30 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ fontSize: "1.1rem" }}>
              Follow Up After the Interview
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ width: 24, height: 24 }} color="success" />
            </TimelineSeparator>
            <TimelineContent sx={{ fontSize: "1.1rem" }}>Done</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="flex justify-center">
        <Link to="/contact" >
          <Button
            variant="contained"
            sx={{ px: 5, backgroundColor: "#6A71F1" }}
          >
            Reach Us
          </Button>
        </Link>
      </div>
    </>
  );
}
export default LandingSection3;
