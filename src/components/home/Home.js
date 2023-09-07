import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

const Home = () => {
  const avatarStyles = {
    background: info.gradient,
  };

  const avatarSize = {
    xs: '35vh',
    md: '40vh',
  };

  const mainContainerStyles = {
    flexDirection: {
      xs: 'column',
      md: 'row',
    },
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 175px)',
  };

  const headerStyles = {
    background: info.gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const renderMiniBioList = () => {
    return info.miniBio.map((bio, index) => (
      <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
    ));
  };

  const renderSocialIcons = () => {
    return info.socials.map((social, index) => (
      <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
    ));
  };

  return (
    <Box component="main" display="flex" {...mainContainerStyles}>
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt="image of developer"
        style={avatarStyles}
        component="img"
        src={me}
        width={avatarSize}
        height={avatarSize}
        borderRadius="50%"
        p="0.75rem"
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <Box>
        <h1>
          Hello, I am <span style={headerStyles}>{info.firstName}</span>
          <span className={Style.hand}>🤭</span>
        </h1>
        <h2>I'm {info.position}.</h2>
        <Box component="ul" p="0.8rem">
          {renderMiniBioList()}
        </Box>
        <Box display="flex" gap="1.5rem" justifyContent="center" fontSize={{ xs: '2rem', md: '2.5rem' }}>
          {renderSocialIcons()}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
