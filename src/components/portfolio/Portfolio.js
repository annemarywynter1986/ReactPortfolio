import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
            <Grid item>
          <Box component="footer" display="flex" flexDirection="column" alignItems="center" py="1.5rem" sx={{ opacity: 0.7 }} width="100%">
           
          </Box>
        </Grid>
        </Box>
    );
};