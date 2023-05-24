import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <Grid className={styles.banner} xs={12} md={12} sm={12} lg={5} item>
      <Stack
        paddingTop={10}
        height="100%"
        width="100%"
        spacing={8}
        alignItems="center"
      >
        <Typography textAlign="center" variant="h1" color="white">
          Social media shared today, tomorrow <br /> or by location
        </Typography>

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Box
            position="relative"
            sx={{
              height: {
                md: 620,
                sm: 500,
                xs: 490,
                lg: 600,
              },
              width: {
                md: 490,
                sm: 400,
                xs: 340,
                lg: 540,
              },
            }}
          >
            <Slider
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <Slide index={0}>
                <Box
                  position="relative"
                  sx={{
                    bottom: {
                      lg: -22,
                      md: -30,
                      xs: 40,
                    },
                    right: {
                      lg: -45,
                      xs: -45,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: {
                        md: 20,
                        lg: -10,
                        xs: 23,
                        sm: 23,
                      },
                      left: {
                        md: -45,
                        lg: -45,
                        xs: -45,
                        sm: -45,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",

                        height: {
                          md: 465,
                          sm: 500,
                          xs: 460,
                          lg: 600,
                        },
                        width: {
                          md: 490,
                          sm: 400,
                          xs: 340,
                          lg: 540,
                        },
                      }}
                    >
                      <Image
                        fill={true}
                        style={{ objectFit: "contain" }}
                        src="/images/ellipse.svg"
                        alt="banner image showing phones"
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",

                      height: {
                        md: 500,
                        sm: 500,
                        xs: 500,
                        lg: 575,
                      },
                      width: {
                        md: 400,
                        sm: 400,
                        xs: 250,
                        lg: 455,
                      },
                    }}
                  >
                    <Image
                      fill={true}
                      style={{ objectFit: "contain" }}
                      src="/images/phone-image.svg"
                      alt="banner image showing phones"
                    />
                  </Box>
                </Box>
              </Slide>
              <Slide index={1}>
                <Box
                  position="relative"
                  sx={{
                    bottom: {
                      lg: -22,
                      md: -30,
                      xs: 40,
                    },
                    right: {
                      lg: -45,
                      xs: -45,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: {
                        md: 20,
                        lg: -10,
                        xs: 23,
                        sm: 23,
                      },
                      left: {
                        md: -45,
                        lg: -45,
                        xs: -45,
                        sm: -45,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",

                        height: {
                          md: 465,
                          sm: 500,
                          xs: 460,
                          lg: 600,
                        },
                        width: {
                          md: 490,
                          sm: 400,
                          xs: 340,
                          lg: 540,
                        },
                      }}
                    >
                      <Image
                        fill={true}
                        style={{ objectFit: "contain" }}
                        src="/images/ellipse.svg"
                        alt="banner image showing phones"
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",

                      height: {
                        md: 500,
                        sm: 500,
                        xs: 500,
                        lg: 575,
                      },
                      width: {
                        md: 400,
                        sm: 400,
                        xs: 250,
                        lg: 455,
                      },
                    }}
                  >
                    <Image
                      fill={true}
                      style={{ objectFit: "contain" }}
                      src="/images/phone-image.svg"
                      alt="banner image showing phones"
                    />
                  </Box>
                </Box>
              </Slide>
              <Slide index={2}>
                <Box
                  position="relative"
                  sx={{
                    bottom: {
                      lg: -22,
                      md: -30,
                      xs: 40,
                    },
                    right: {
                      lg: -45,
                      xs: -45,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: {
                        md: 20,
                        lg: -10,
                        xs: 23,
                        sm: 23,
                      },
                      left: {
                        md: -45,
                        lg: -45,
                        xs: -45,
                        sm: -45,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",

                        height: {
                          md: 465,
                          sm: 500,
                          xs: 460,
                          lg: 600,
                        },
                        width: {
                          md: 490,
                          sm: 400,
                          xs: 340,
                          lg: 540,
                        },
                      }}
                    >
                      <Image
                        fill={true}
                        style={{ objectFit: "contain" }}
                        src="/images/ellipse.svg"
                        alt="banner image showing phones"
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",

                      height: {
                        md: 500,
                        sm: 500,
                        xs: 500,
                        lg: 575,
                      },
                      width: {
                        md: 400,
                        sm: 400,
                        xs: 250,
                        lg: 455,
                      },
                    }}
                  >
                    <Image
                      fill={true}
                      style={{ objectFit: "contain" }}
                      src="/images/phone-image.svg"
                      alt="banner image showing phones"
                    />
                  </Box>
                </Box>
              </Slide>
            </Slider>

            <Box
              sx={{
                right: {
                  lg: 260,
                  md: 220,
                  xs: 160,
                },
                top: {
                  lg: 610,
                  md: 550,
                  xs: 400,
                },
                position: "absolute",
              }}
            >
              <DotGroup
                renderDots={({ totalSlides, currentSlide }) => (
                  <Stack alignItems="center" flexDirection="row">
                    {[0, 1, 2].map((number, index) => {
                      if (number === currentSlide) {
                        return (
                          <Image
                            key={index}
                            height={25}
                            width={25}
                            src={"/images/active.svg"}
                            alt={"inactive slide"}
                            style={{
                              marginRight: index < 2 ? 10 : 0,
                            }}
                          />
                        );
                      } else {
                        return (
                          <Box
                            key={index}
                            style={{
                              borderRadius: 999,
                              height: 18,
                              width: 18,
                              marginRight: index < 2 ? 10 : 0,
                              border: "2px solid white",
                              backgroundColor: "transparent",
                            }}
                          />
                        );
                      }
                    })}
                  </Stack>
                )}
              />
            </Box>
          </Box>
        </CarouselProvider>
      </Stack>
    </Grid>
  );
};

export default Banner;
