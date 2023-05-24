import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { FormInput } from "@src/components/global";
import {
  LOGIN_FORM_VALIDATION_SCHEMA,
  LoginFormType,
} from "@src/lib/schemas/login-form-schema";
import Image from "next/image";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

const LoginForm = () => {
  const methods = useForm<LoginFormType>({
    defaultValues: {
      emailOrPhone: "",
      firstName: "",
      lastName: "",
      password: "",
      date: "",
      confirmPassword: "",
    },
    resolver: zodResolver(LOGIN_FORM_VALIDATION_SCHEMA),
  });

  const { handleSubmit, reset } = methods;

  const handleOnClickCreateAccount = handleSubmit((values) =>
    console.log(values)
  );

  return (
    <Grid xs={12} md={12} sm={12} lg={7} item>
      <Stack
        sx={{
          width: {
            md: "85%",
            sm: "100%",
            xs: "100%",
          },
          height: {
            md: "100vh",
          },
          marginX: {
            md: "auto",
            sm: 0,
            xs: 0,
          },
          alignSelf: "center",
          paddingTop: {
            xs: 2,
            sm: 2,
            md: 5,
            lg: 10,
          },
        }}
        paddingTop={4}
        height="100%"
        spacing={8}
      >
        <Stack spacing={6} direction="column">
          <Stack
            sx={{
              alignSelf: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "flex-start",
              },
            }}
            spacing={1}
            alignItems="center"
            direction="row"
          >
            <Image
              height={35}
              width={35}
              src="/images/img-new-logo-low-quality.svg"
              alt="brand-logo"
            />
            <Typography variant="caption">Capzul</Typography>
          </Stack>

          <Stack
            sx={{
              alignSelf: {
                lg: "flex-start",
                md: "center",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Typography variant="h1">Create account</Typography>
            <Typography variant="body1">
              For business, band or celebrity.
            </Typography>
          </Stack>
          <Stack direction="column">
            <FormProvider {...methods}>
              <Grid
                marginBottom={3}
                rowGap={3}
                container
                sx={{
                  justifyContent: {
                    lg: "space-between",
                    md: "space-between",
                    xs: "center",
                  },
                }}
              >
                <FormInput label="first name" name="firstName" />
                <FormInput label="Last name" name="lastName" />
                <FormInput label="Email or phone number" name="emailOrPhone" />
                <FormInput
                  label="Date of birth (MM/DD/YY)"
                  name="date"
                  type="date"
                />
                <FormInput label="Password" name="password" />
                <FormInput label="Confirm password" name="confirmPassword" />
              </Grid>
            </FormProvider>
            <Stack
              sx={{
                width: {
                  xs: "80%",
                  sm: "80%",
                  md: "100%",
                  lg: "100%",
                },
                alignSelf: "center",
              }}
              spacing={1}
              direction="column"
            >
              <Stack
                width="100%"
                sx={{
                  flexDirection: {
                    lg: "row",
                    md: "column-reverse",
                    sm: "column-reverse",
                    xs: "column-reverse",
                  },
                  justifyContent: {
                    lg: "space-between",
                    md: "flex-start",
                    sm: "flex-start",
                    xs: "flex-start",
                  },
                }}
              >
                <label>
                  <Stack direction="row">
                    <input type="checkbox" />
                    <Typography variant="body1">Remember me</Typography>
                  </Stack>
                </label>

                <Typography
                  variant="subtitle2"
                  sx={{
                    marginBottom: {
                      xs: 3,
                      sm: 3,
                      md: 0,
                      lg: 0,
                    },
                    textAlign: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "flex-end",
                    },
                    cursor: "pointer",
                  }}
                >
                  Forgot password?
                </Typography>
              </Stack>
              <label htmlFor="t&c">
                <Stack direction="row">
                  <input id="t&c" type="checkbox" />
                  <Stack spacing={0.4} direction="row">
                    <Typography fontSize={14} variant="body1">
                      I agree to all the
                    </Typography>
                    <Typography fontSize={14} variant="subtitle2">
                      Terms
                    </Typography>
                    <Typography fontSize={14} variant="body1">
                      and{" "}
                    </Typography>
                    <Typography fontSize={14} variant="subtitle2">
                      Privacy policy
                    </Typography>
                  </Stack>
                </Stack>
              </label>
            </Stack>
            <Stack spacing={2} marginTop={3} marginBottom={3}>
              <Grid
                container
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "space-between",
                    lg: "space-between",
                  },
                }}
              >
                <Grid
                  sx={{
                    marginBottom: {
                      xs: 2.5,
                      sm: 2.5,
                      md: 0,
                      lg: 0,
                    },
                  }}
                  item
                  xs={10}
                  sm={10}
                  md={5.8}
                  lg={5.8}
                >
                  <Button
                    fullWidth={true}
                    variant="contained"
                    onClick={handleOnClickCreateAccount}
                  >
                    Create account
                  </Button>
                </Grid>
                <Grid item xs={10} sm={10} md={5.8} lg={5.8}>
                  <Button
                    fullWidth={true}
                    variant="contained"
                    color="secondary"
                  >
                    <Image
                      src="/images/google.svg"
                      alt="google play button"
                      height={20}
                      width={20}
                      style={{
                        marginRight: 10,
                      }}
                    />
                    Sign-in with google
                  </Button>
                </Grid>
              </Grid>
              <Stack direction="column">
                <Stack spacing={1} alignSelf="center" direction="row">
                  <Typography variant="body1">
                    Don&#39;t have an account?
                  </Typography>
                  <Link
                    style={{
                      textDecorationLine: "none",
                    }}
                    href="#"
                  >
                    <Typography variant="subtitle2">Log In</Typography>
                  </Link>
                </Stack>
                <Stack
                  sx={{
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "flex-start",
                    },
                    marginTop: {
                      xs: 0,
                      sm: 0,
                      md: 0,
                      lg: 8,
                    },
                  }}
                  spacing={4}
                  direction="row"
                >
                  <Image
                    src="/images/Google Play Badge.svg"
                    alt="google play button"
                    height={120}
                    width={120}
                  />
                  <Image
                    src="/images/App Store Badge.svg"
                    alt="google play button"
                    height={120}
                    width={120}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default LoginForm;
