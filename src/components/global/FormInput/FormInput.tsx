import { Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";
import { IFormInput } from "./types";

const FormInput: IFormInput = ({ name, label, type }) => {
  const { control } = useFormContext();

  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      item
      xs={10}
      sm={10}
      md={5.8}
      lg={5.8}
    >
      <Stack>
        <Typography>{label}</Typography>
        <Controller
          control={control}
          name={name}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => {
            if (type === "date") {
              return (
                <Stack position="relative" flexDirection="row">
                  <TextField
                    helperText={error ? error.message : null}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    color="primary"
                    variant="outlined"
                    fullWidth
                  />
                  <Image
                    height={25}
                    width={25}
                    src={"/images/calender.svg"}
                    alt={"calender icon"}
                    style={{
                      position: "absolute",
                      bottom: 16,
                      right: 15,
                    }}
                  />
                </Stack>
              );
            } else {
              return (
                <Stack>
                  <TextField
                    helperText={error ? error.message : null}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    color="primary"
                    variant="outlined"
                  />
                </Stack>
              );
            }
          }}
        />
      </Stack>
    </Grid>
  );
};

export default FormInput;
