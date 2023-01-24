import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
    Checkbox,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { register } from '../backend/firebase';

export default function Register(){

    const router = useRouter();

    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [errorPassword, setErrorPassword] = useState(false)

    const [tos, setTos] = useState(false)
    const [tosError, setTosError] = useState(false)

    async function CreateAccountManager(){
        setErrorPassword(false)
        setError(false)
        setErrorMsg('')

        if(password1 != password2 || password1.length < 8){
            setErrorPassword(true)
            setErrorMsg('Password do not match')
            return
        }

        if(tos == false){
            setTosError(true)
            setErrorMsg('Please confirm ToS in order to create an account')
            return
        }

        const ret = await createAccount()
        if(ret){
            router.push('/home')
        }
    }

    async function createAccount() {
        var success = true
        try{
            await register(email, password1);
        } catch (e: any){
            success = false;
            setError(true)
            setErrorMsg(e.message)
        } finally{
            return success
        }
    }

    function changeTos(){
        if(tos == false)
            setTos(true)
        else
            setTos(false)
    }

    return (
        <Container size={600} my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900, fontSize: 40})}
            >
                Welcome to Codeet!
            </Title>
            <Text color="dimmed" size="md" align="center" mt={5} mb={30}>
                Already have an account?{' '}
                <Anchor<'a'> href="#" size="sm" onClick={() => router.push('/login')}>
                    Login
                </Anchor>
            </Text>
            <Text color="red" size="md" align="center" my={''}>
                {errorMsg}
            </Text>
            <TextInput label="Email" placeholder="name@email.com" value={email} error={error} onChange={(e) => setEmail(e.target.value)} required  />
            <PasswordInput label="Password" placeholder="your password" value={password1} error={errorPassword} onChange={(e) => setPassword1(e.target.value)} required mt="md" />
            <PasswordInput label="Confirm Password" placeholder="your password" value={password2} error={errorPassword} onChange={(e) => setPassword2(e.target.value)} required mt="md" />
            {/* <Group position="apart" mt="lg">
                <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                    Forgot password?
                </Anchor>
            </Group> */}
            <Checkbox label={'By checking this you confirm codeet\'s ToS.'} mt={30} error={tosError} onChange={() => changeTos()} ></Checkbox>
            <Button fullWidth mt="xl" onClick={() => CreateAccountManager()}>
                Create Account
            </Button>
        </Paper>
    </Container>
    )
}