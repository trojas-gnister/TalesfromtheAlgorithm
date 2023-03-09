import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './graphql';

export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ variables: { email, password } });
      console.log(data);
      // Do something with the data, such as redirect to another page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={24}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#04043B',
          padding: 30,
          borderRadius: 25,
          border: 1,
          borderColor: '#3EB489',
        }}
      >
        <Avatar sx={{ marginBottom: 2, bgcolor: '#11153A' }}>
          <EmojiPeopleRoundedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontFamily: 'eczar',
            fontWeight: 'bold',
            letterSpacing: 0.8,
          }}
        >
          Create your account.
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: '45vw' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle
              sx={{ color: '#F2A2E8', mb: 2.5, mr: 1 }}
            />
            <TextField
              variant="filled"
              color="secondary"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                fontFamily: 'eczar',
                fontWeight: 'bold',
                letterSpacing: 0.8,
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockOutlinedIcon
              sx={{ color: '#F2A2E8', mb: 2.5, mr: 1 }}
            />
            <TextField
              variant="filled"
              color="secondary"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                fontFamily: 'eczar',
                fontWeight: 'bold',
                letterSpacing: 0.8,
              }}
            />
          </Box>
          <Button
            type="submit"
            fullWidth={true}
            variant="outlined"
            disabled={loading}
            sx={{
              mt: 5,
              mb: 2,
              height: 50,
              fontFamily: 'eczar',
              fontWeight: 'bold',
              letterSpacing: 0.8,
            }}
          >
                      SIGN UP
                    </Button>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 1
                        }}>
                        <Link component={Link} to="/Login"
                        sx={{
                            color: '#fff',
                            textDecoration: 'none',
                        }}>
                        Already have an account? Login here.
                    </Link>
                    </Box>
                </Box>
            </Paper>
        </Container>


    )
  }
