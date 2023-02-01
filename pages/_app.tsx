import { AppProps } from 'next/app';
import Head from 'next/head';
import { BackgroundImage, Container, Grid, Group, MantineProvider } from '@mantine/core';
import { NavbarMinimal } from '../components/navbar';
import { NavbarMinimal2 } from '../components/navbar';
import '../styles/globals.css'
import { initializeApp } from "firebase/app";
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useRouter } from 'next/router';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYTtlBtN8J3a5DxawRMxIzdTW0HG27OLw",
  authDomain: "codeet-d0315.firebaseapp.com",
  projectId: "codeet-d0315",
  storageBucket: "codeet-d0315.appspot.com",
  messagingSenderId: "794009114257",
  appId: "1:794009114257:web:0024821d4d359b9682d130",
  measurementId: "G-HDV2X573T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

type User = String | null

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [currentUser, setCurrentUser] = useState<User>(null)

  const router = useRouter();

  useEffect(() => {
    const auth = getAuth()
    
    if(auth){
      auth.onAuthStateChanged((authUser) => {
        if(authUser){
          setCurrentUser(authUser.email)
        } else{
          setCurrentUser(null)
        }
      })
    }
  }, [])

  useEffect(() => {
    if(currentUser){
      router.push('/home')
    } else{
      router.push('/login')
    }
  }, [currentUser])

  if (currentUser){
    return (
      <>
        <Head>
          <title>Codeet</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <BackgroundImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeOOSOfog9c9gGWoHDDRBactC9HaUco261lMDEDoZlqOWGEgEJ49yD1aHS1SQNUtENfA&usqp=CAU">
        <Grid grow align='center' style={{overflowY: 'hidden'}}>
          <Grid.Col span={1}  style={{overflowY: 'hidden'}}>
            <NavbarMinimal></NavbarMinimal>
          </Grid.Col>
          <Grid.Col span={10} style={{overflowY: 'hidden'}}>
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
  } else{
    return (
      <>
        <Head>
          <title>Codeet</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <BackgroundImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeOOSOfog9c9gGWoHDDRBactC9HaUco261lMDEDoZlqOWGEgEJ49yD1aHS1SQNUtENfA&usqp=CAU">
        <Grid grow align='center' style={{overflowY: 'hidden'}}>
          <Grid.Col span={1}  style={{overflowY: 'hidden'}}>
            <NavbarMinimal2></NavbarMinimal2>
          </Grid.Col>
          <Grid.Col span={10} style={{overflowY: 'hidden'}}>
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
}