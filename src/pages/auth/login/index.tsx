import { Grid } from "@mui/material";
import Banner from "@src/components/auth/Banner";
import LoginForm from "@src/components/auth/LoginForm";

function LoginPage() {
  return (
    <Grid height="100vh" width="100vw" container>
      <Banner />
      <LoginForm />
    </Grid>
  );
}

export default LoginPage;
