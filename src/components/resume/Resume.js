import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Paper, Typography, Button, Box } from "@mui/material";
import PDF from "./documentation/Anne_Mary_Wynter_FE_dev_resume.pdf";
import "./Resume.module.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Resume() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="resume-container dark">
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
          </Container>
        </section>
      </Box>
    </ThemeProvider>
  );
}

export default Resume;

