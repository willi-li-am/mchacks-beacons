import React from 'react';
import { Typography, Box, Button, TextField} from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface SignInUpProps {
  handleSwitch: () => void;
}

const SignIn = ({handleSwitch} : SignInUpProps) => {

  const { control, handleSubmit, formState: { errors } } = useForm<SignInValues>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  interface SignInValues {
    email: string;
    password: string;
  }

  const handleSignIn: SubmitHandler<SignInValues> = (data) => {
    alert('Sign In');
  }

  return (
      <Box sx={{width: '100%'}}>
        {/* <Typography variant="h6" sx={{fontWeight: '600', marginBottom: 1}}>Sign In</Typography> */}
        <form onSubmit={handleSubmit(handleSignIn)} style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>  
          <Controller
            name='email'
            control={control}
            rules={{ required: 'Email is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  // Make the label a custom color when focused
                  '& label.Mui-focused': {
                    color: 'black', 
                  },
                  // Outlined variant styles
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2, // fully rounded
                    transition: 'all 0.3s ease-in-out',
                    '& fieldset': {
                      borderColor: 'grey.300', // default border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey.500', // hover color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // focus color
                    },
                  },
                }}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{
                  // Make the label a custom color when focused
                  '& label.Mui-focused': {
                    color: 'black', 
                  },
                  // Outlined variant styles
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2, // fully rounded
                    transition: 'all 0.3s ease-in-out',
                    '& fieldset': {
                      borderColor: 'grey.300', // default border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey.500', // hover color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // focus color
                    },
                  },
                }}
              />
            )}
          />
          <Box sx={{mb: 2}}/>
          <Button type="submit" variant="contained" color="primary" 
          sx={{
            bgcolor: 'black',
            width: '100%',
            color: 'white',
            fontWeight: 'bold',
            paddingX: 3,
            paddingY: 1.5,
            borderRadius: 2,
            textTransform: 'none', // Keep text case as-is
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease-in-out',
          }}>
            Login
          </Button>
          <Box>
            <Typography variant="body2" sx={{mt: 1}}>
              Don't have an account? 
              <Button disableRipple variant="text" color="primary" sx={{
                ml: .5,
                textTransform: 'none',
                ':hover': {
                  bgcolor: 'transparent',
                },
                ':focused': {
                  bgcolor: 'transparent',
                }
              }}
              onClick={handleSwitch}
              >
                Sign up
              </Button>
            </Typography>
          </Box>
        </form>
      </Box>
  )
}

const SignUp = ({handleSwitch} : SignInUpProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpValues>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  interface SignUpValues {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }

  const handleSignUp: SubmitHandler<SignUpValues> = (data) => {
    alert(JSON.stringify(data));
  }

  return (
      <Box sx={{width: '100%'}}>
        {/* <Typography variant="h6" sx={{fontWeight: '600', marginBottom: 1}}>Sign In</Typography> */}
        <form onSubmit={handleSubmit(handleSignUp)} style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>  
          <Controller
            name='email'
            control={control}
            rules={{ required: 'Email is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  // Make the label a custom color when focused
                  '& label.Mui-focused': {
                    color: 'black', 
                  },
                  // Outlined variant styles
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2, // fully rounded
                    transition: 'all 0.3s ease-in-out',
                    '& fieldset': {
                      borderColor: 'grey.300', // default border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey.500', // hover color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // focus color
                    },
                  },
                }}
              />
            )}
          />
          <Controller
            name='username'
            control={control}
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  // Make the label a custom color when focused
                  '& label.Mui-focused': {
                    color: 'black', 
                  },
                  // Outlined variant styles
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2, // fully rounded
                    transition: 'all 0.3s ease-in-out',
                    '& fieldset': {
                      borderColor: 'grey.300', // default border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey.500', // hover color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // focus color
                    },
                  },
                }}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{
                  // Make the label a custom color when focused
                  '& label.Mui-focused': {
                    color: 'black', 
                  },
                  // Outlined variant styles
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2, // fully rounded
                    transition: 'all 0.3s ease-in-out',
                    '& fieldset': {
                      borderColor: 'grey.300', // default border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey.500', // hover color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // focus color
                    },
                  },
                }}
              />
            )}
          />
          <Controller
            name='confirmPassword'
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{
                  // Make the label a custom color when focused
                  '& label.Mui-focused': {
                    color: 'black', 
                  },
                  // Outlined variant styles
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2, // fully rounded
                    transition: 'all 0.3s ease-in-out',
                    '& fieldset': {
                      borderColor: 'grey.300', // default border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey.500', // hover color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // focus color
                    },
                  },
                }}
              />
            )}
          />
          <Box sx={{mb: 2}}/>
          <Button type="submit" variant="contained" color="primary" 
          sx={{
            bgcolor: 'black',
            width: '100%',
            color: 'white',
            fontWeight: 'bold',
            paddingX: 3,
            paddingY: 1.5,
            borderRadius: 2,
            textTransform: 'none', // Keep text case as-is
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease-in-out',
          }}>
            Create Account
          </Button>
          <Box>
            <Typography variant="body2" sx={{mt: 1}}>
              Already have an account? 
              <Button disableRipple variant="text" color="primary" sx={{
                ml: .5,
                textTransform: 'none',
                ':hover': {
                  bgcolor: 'transparent',
                },
                ':focused': {
                  bgcolor: 'transparent',
                }
              }}
              onClick={handleSwitch}
              >
                Login
              </Button>
            </Typography>
          </Box>
        </form>
      </Box>
  )
}

export {SignIn, SignUp}