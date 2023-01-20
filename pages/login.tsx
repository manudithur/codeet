import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { login } from '../backend/firebase';
  
export default function Login() {
    const router = useRouter()

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    async function Login(){
        var error = false
        var result = null
        try{
            result = await login(email, password)
        } catch (e){
            error = true
        } finally{
            console.log(JSON.stringify(result))
            if(error == false){
                router.push('home')
            }
        }
    }

    return (
        <Container size={500} my={40}>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900, fontSize: 50})}
            >
                Welcome back!
            </Title>
            <Text color="dimmed" size="md" align="center" mt={5}>
                Do not have an account yet?{' '}
                <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
                    Create account
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="name@email.com" value={email}  onChange={(e) => setEmail(e.target.value)} required  />
                <PasswordInput label="Password" placeholder="your password" value={password} onChange={(e) => setPassword(e.target.value)} required mt="md" />
                {/* <Group position="apart" mt="lg">
                    <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                    <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                        Forgot password?
                    </Anchor>
                </Group> */}
                <Button fullWidth mt="xl" onClick={() => Login()}>
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}