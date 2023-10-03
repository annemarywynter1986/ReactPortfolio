// import React, { useState, useEffect } from "react";
// import PDF from "../resume/documentation/Anne Mary Software Developer Resume for webapp.pdf";
// import { Container, Grid, Paper, Typography, Button, Box } from "@mui/material";
// import "./Resume.module.scss";

// function Resume() {
//     const [darkMode] = useState(
//         JSON.parse(localStorage.getItem("darkMode")) || false
//     );

//     useEffect(() => {
//         localStorage.setItem("darkMode", JSON.stringify(darkMode));
//     }, [darkMode]);

//     return (
//         <Box className={`resume-container ${darkMode ? "dark" : "light"}`}>
//             <section id="resume" className="resume-margin">
//                 <Container maxWidth="md">
//                     <Paper elevation={3} className="resume-paper">
//                         <Typography variant="h4" align="center">
//                             Resume
//                         </Typography>
//                         <hr />
//                         <Button variant="contained" color="primary" href={PDF} download>
//                             Download Resume
//                         </Button>
//                     </Paper>

//                     <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                             <Paper elevation={3} className={`resume-paper ${darkMode ? 'dark' : 'light'}`}>
//                                 <Typography variant="h6">Technical Skills</Typography>
//                                 <hr className={darkMode ? 'dark' : 'light'} />
//                                 <ul>
//                                     <li>
//                                         <strong>Languages:</strong> JavaScript, HTML, CSS
//                                     </li>
//                                     <li>
//                                         <strong>Libraries/Frameworks:</strong> React, jQuery, Material UI
//                                     </li>
//                                     <li>
//                                         <strong>Databases:</strong> MongoDB, MySQL
//                                     </li>
//                                     <li>
//                                         <strong>Tools/Platforms:</strong> Git, GitHub, Heroku
//                                     </li>
//                                 </ul>
//                             </Paper>

//                         </Grid>

//                         <Grid item xs={12}>
//                             <Paper elevation={3} className="resume-paper">
//                                 <Typography variant="h6">Education</Typography>
//                                 <hr />
//                                 <div className="resume-item">
//                                     <Typography variant="subtitle1">
//                                         Certificate. Full Stack Developer
//                                     </Typography>
//                                     <Typography variant="subtitle2">
//                                         Rutgers University, APRIL 2023- OCTOBER 2023
//                                     </Typography>
//                                     <Typography>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                                         Integer cursus bibendum magna, vitae dapibus felis ultricies
//                                         ut. Sed ac odio eget est convallis ullamcorper. Duis bibendum
//                                         vestibulum risus, non convallis odio aliquam eu.
//                                     </Typography>
//                                 </div>
//                             </Paper>
//                         </Grid>

//                         <Grid item xs={12}>
//                             <Paper elevation={3} className="resume-paper">
//                                 <Typography variant="h6">Work Experience</Typography>
//                                 <hr />
//                                 <div className="resume-item">
//                                     <Typography variant="subtitle1">
//                                         QA automation engineer, Nextiva Inc
//                                     </Typography>
//                                     <Typography variant="subtitle2">
//                                         Arizona (remote), 2022-present
//                                     </Typography>
//                                     <Typography>
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                                         Integer cursus bibendum magna, vitae dapibus felis ultricies
//                                         ut. Sed ac odio eget est convallis ullamcorper. Duis bibendum
//                                         vestibulum risus, non convallis odio aliquam eu.
//                                     </Typography>
//                                 </div>
//                             </Paper>
//                         </Grid>

//                         <Grid item xs={12}>
//                             <Paper elevation={3} className="resume-paper">
//                                 <Typography variant="h6">Proficiencies</Typography>
//                                 <ul>
//                                     <li>HTML/CSS</li>
//                                     <li>JavaScript</li>
//                                     <li>
//                                         <span style={{ color: "#009688" }}>M</span>ongoDB
//                                     </li>
//                                     <li>
//                                         <span style={{ color: "#009688" }}>E</span>xpress
//                                     </li>
//                                     <li>
//                                         <span style={{ color: "#009688" }}>R</span>eact
//                                     </li>
//                                     <li>
//                                         <span style={{ color: "#009688" }}>N</span>ode.js
//                                     </li>
//                                     <li>SQL</li>
//                                 </ul>
//                             </Paper>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </section>
//         </Box>
//     );
// }

// export default Resume;

import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Grid, Paper, Typography, Button, Box } from "@mui/material";
import PDF from "../resume/documentation/Anne Mary Software Developer Resume for webapp.pdf";
import "./Resume.module.scss";


function Resume() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Define light and dark themes
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box className={`resume-container ${darkMode ? "dark" : "light"}`}>
        <section id="resume" className="resume-margin">
          <Container maxWidth="md">
            <Paper elevation={3} className="resume-paper">
              <Typography variant="h4" align="center">
                Resume
              </Typography>
              <hr />
              <Button variant="contained" color="primary" href={PDF} download>
                Download Resume
              </Button>
            </Paper>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper elevation={3} className={`resume-paper ${darkMode ? 'dark' : 'light'}`}>
                  <Typography variant="h6">Technical Skills</Typography>
                  <hr className={darkMode ? 'dark' : 'light'} />
                  <ul>
                    <li>
                      <strong>Languages:</strong> JavaScript, HTML, CSS
                    </li>
                    <li>
                      <strong>Libraries/Frameworks:</strong> React, jQuery, Material UI
                    </li>
                    <li>
                      <strong>Databases:</strong> MongoDB, MySQL
                    </li>
                    <li>
                      <strong>Tools/Platforms:</strong> Git, GitHub, Heroku
                    </li>
                  </ul>
                </Paper>
              </Grid>

              {/* Add Education, Work Experience, and Proficiencies sections here */}
            </Grid>
          </Container>
        </section>
      </Box>
    </ThemeProvider>
  );
}

export default Resume;

