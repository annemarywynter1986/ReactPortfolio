import { useState, useRef } from 'react';
import {
  RichTextEditor,
  MenuControlsContainer,
  MenuSelectHeading,
  MenuDivider,
  MenuButtonBold,
  MenuButtonItalic,
  MenuButtonStrikethrough,
  MenuButtonCode,
  MenuButtonBulletedList,
  MenuButtonOrderedList,
  MenuButtonBlockquote,
  MenuButtonCodeBlock,
} from 'mui-tiptap';
import StarterKit from '@tiptap/starter-kit';
import { Box, Typography, TextField, Button } from '@mui/material';
import { info } from '../../info/Info';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const rteRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageContent = rteRef.current?.editor?.getHTML() || '';

    console.log('Form submitted:', {
      ...formData,
      message: messageContent,
    });

    alert('Thank you for your message!');

    setFormData({
      name: '',
      email: '',
    });
    rteRef.current?.editor?.commands.setContent('');
  };

  

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        border: `1px solid ${info.baseColor}`,
        borderRadius: 2,
        maxWidth: 600,
        margin: 'auto',
        mt: 5,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" gutterBottom>
        Contact Anne Mary Wynter
      </Typography>

      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#ffffff',
          },
        }}
      />

      <TextField
        label="Email"
        variant="outlined"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#ffffff',
          },
        }}
      />

      <Box sx={{ width: '100%', mb: 2 }}>
        <Typography
          variant="body2"
          sx={{
            mb: 1,
            color: info.baseColor,
            fontWeight: 600,
          }}
        >
        </Typography>
        <RichTextEditor
        placeholder="Type your message here..."
          ref={rteRef}
          extensions={[
            StarterKit.configure({
              bold: true,
              italic: true,
              strike: true,
              code: true,
              heading: {
                levels: [1, 2, 3],
              },
              bulletList: true,
              orderedList: true,
              blockquote: true,
              codeBlock: true,
            }),
          ]}
          content=""
          renderControls={() => (
            <MenuControlsContainer>
              <MenuSelectHeading />
              <MenuDivider />
              <MenuButtonBold />
              <MenuButtonItalic />
              <MenuButtonStrikethrough />
              <MenuButtonCode />
              <MenuDivider />
              <MenuButtonBulletedList />
              <MenuButtonOrderedList />
              <MenuButtonBlockquote />
              <MenuButtonCodeBlock />
            </MenuControlsContainer>
          )}
          sx={{
            width: '100%',
            minHeight: 200,
            '& .MuiTiptap-RichTextEditor-root': {
              backgroundColor: '#ffffff',
            },
            '& .MuiTiptap-FieldContainer-root': {
              backgroundColor: '#ffffff',
            },
            '& .MuiTiptap-RichTextContent-root': {
              padding: 2,
               backgroundColor: '#ffffff',
            },
            '& .ProseMirror': {
              minHeight: 200,
              padding: 0,
              backgroundColor: '#ffffff',
              color: '#000000',
            },
          }}
        />
      </Box>

      <Button
        variant="contained"
        type="submit"
        sx={{
          mt: 2,
          background: info.gradient,
          '&:hover': {
            opacity: 0.9,
          },
        }}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
