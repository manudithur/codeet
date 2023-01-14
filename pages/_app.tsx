import { AppProps } from 'next/app';
import Head from 'next/head';
import { BackgroundImage, Container, Grid, Group, MantineProvider } from '@mantine/core';
import { NavbarMinimal } from '../components/navbar';
import '../styles/globals.css'
export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Codeet</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <BackgroundImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeOOSOfog9c9gGWoHDDRBactC9HaUco261lMDEDoZlqOWGEgEJ49yD1aHS1SQNUtENfA&usqp=CAU">
      <Grid grow align='center'>
        <Grid.Col span={1}>
          <NavbarMinimal></NavbarMinimal>
        </Grid.Col>
        <Grid.Col span={10}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                  /** Put your mantine theme override here */
                  colorScheme: 'light',
                }}
              >
              <Component {...pageProps} />
            </MantineProvider>
        </Grid.Col>
        <Grid.Col span={1}>
        </Grid.Col>
      </Grid>
      </BackgroundImage>
    </>
  );
}