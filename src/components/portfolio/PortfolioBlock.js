import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

const portfolioBlockStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '2rem',
  },
  portfolioContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'center',
    fontSize: '1.5rem',
    padding: '2rem',
  },
  box: {
    padding: '1rem',
    border: '2px solid black',
    borderRadius: '25px',
  },
};

function PortfolioBlock(props) {
  const { image, live, source, title } = props;

  return (
    <Box style={portfolioBlockStyles.container}>
      <img src={image} alt="mockup" />
      <h1 style={portfolioBlockStyles.title}>{title}</h1>
      <Box className="portfolio" style={portfolioBlockStyles.portfolioContainer}>
        <Box style={portfolioBlockStyles.box}>
          <IconLink link={live} title="Live Demo" icon="fa fa-safari" />
        </Box>
        <Box style={portfolioBlockStyles.box}>
          <IconLink link={source} title="Source Code" icon="fa fa-code" />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
