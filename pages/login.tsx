import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { login } from '../backend/firebase';
  
export default function Login() {
    const router = useRouter()

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [error, setError] = useState(false)
    const [errorString, setErrorString] =  useState('')

    async function LoginManager() {
        var ret = await Login()
        if(ret){
            router.push('/home')
        }
    }
    

    async function Login(){
        var success = true
        try{
            setError(false)
            setErrorString('')
            await login(email, password)
        } catch (e: any){
            success = false
            setError(true)
            setErrorString(e.message)
        } finally{
            return success
        }
    }

    return (
        <Container size={500} my={40}>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900, fontSize: 40})}
            >
                Welcome back!
            </Title>
            <Text color="dimmed" size="md" align="center" mt={5}>
                Do not have an account yet?{' '}
                <Anchor<'a'> href="#" size="sm" onClick={() => router.push('/register')}>
                    Create account
                </Anchor>
            </Text>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <Text color="red" size="sm" align="center" my={'20'}>
                {errorString}
                </Text>
                <TextInput label="Email" placeholder="name@email.com" value={email} error={error} onChange={(e) => setEmail(e.target.value)} required  />
                <PasswordInput label="Password" placeholder="your password" value={password} error={error} onChange={(e) => setPassword(e.target.value)} required mt="md" />
                {/* <Group position="apart" mt="lg">
                    <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                    <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                        Forgot password?
                    </Anchor>
                </Group> */}
                <Button fullWidth mt="xl" onClick={() => LoginManager()}>
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}