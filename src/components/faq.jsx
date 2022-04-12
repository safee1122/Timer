import React from "react";
import "../assets/css/faq.css";
import arrow from "../assets/images/arrow.png";
import ReactDOM from "react-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledEngineProvider } from "@mui/material/styles";

function Faq() {
  return (
    <div className="faq">
      {/* 
      <div className="faqs">
        <h2>What chains do you support?</h2>
        <button>
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className="faqs">
        <h2>Can I pay in crypto?</h2>
        <button>
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className="faqs">
        <h2>Will You Raise the Price?</h2>
        <button>
          <img src={arrow} alt="" />
        </button>
      </div> */}
      <h1>faq</h1>
      <StyledEngineProvider injectFirst>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What chains do you support?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We currently support Ethereum mainnet. We have multi-chain support
              on our roadmap soon
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Can I pay in crypto?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Will You Raise the Price?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </StyledEngineProvider>

      <div className="v3"></div>
      <div className="v4"></div>
    </div>
  );
}

export default Faq;
