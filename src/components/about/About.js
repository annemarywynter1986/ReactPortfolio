import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function formatText(lines) {
    return lines.map((line, index) => <p key={index}>{line}</p>);
  }

  function aboutMeText() {
    const lines = [
      `${firstName}${info.lastName.toLowerCase()} $ about ${firstName}`,
      ` ${info.bio}`,
    ];

    return formatText(lines);
  }

  function skillsText() {
    const proficientSkills = info.skills.proficientWith.map((proficiency) => `  ${proficiency}`);
    const exposedSkills = info.skills.exposedTo.map((skill) => `  ${skill}`);

    const lines = [
      `${firstName}${info.lastName.toLowerCase()} $ cd skills/tools`,
      `skills/tools (main) $`,
      'Proficient With',
      ...proficientSkills,
      'Exposed To',
      ...exposedSkills,
    ];

    return formatText(lines);
  }

  function miscText() {
    const hobbiesList = info.hobbies.map((hobby) => `${hobby.emoji} ${hobby.label}`);

    const lines = [
      `${firstName}${info.lastName.toLowerCase()} $ cd hobbies/interests`,
      `hobbies/interests $`,
      ...hobbiesList,
    ];

    return formatText(lines);
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="3rem">
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
