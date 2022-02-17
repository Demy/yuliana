import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react"
import { useDispatch } from "react-redux";
import * as actions from "../redux/project/actions";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { toast } from 'react-toastify';

export default function ContactPage() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const dispatch = useDispatch();

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangeMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    
    dispatch(actions.sendEmail(name, email, message));

    setName('');
    setEmail('');
    setMessage('');
    
    toast('Спасибо, ваше сообщение отправлено!');
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <ForwardToInboxIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Написать мне
        </Typography>
        <Box component="form" onSubmit={handleSend} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Имя"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={onChangeName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Ваш email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={onChangeEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="message"
            label="Сообщение"
            name="message"
            autoComplete="message"
            multiline
            rows={4}
            value={message}
            onChange={onChangeMessage}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={name === '' || email === '' || message === ''}
            sx={{ mt: 3, mb: 2 }}
          >
            Отправить
          </Button>
        </Box>
      </Box>
    </Container>
  );
}