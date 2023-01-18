import { Button, Grid, Group, ScrollArea, Title } from "@mantine/core";
import { useRouter } from "next/router";
import Codeet from "../components/codeet";

export default function Home(){
    
    const router = useRouter()

    return (
        <Grid pt={50}>

            <Grid.Col span={2}></Grid.Col>
            <Grid.Col span={8}>
            <ScrollArea style={{height: 900}} type={'never'} offsetScrollbars>
                <Group position="apart" pb={30}>
                    <Title>Your Feed</Title>
                    <Button size='lg' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}radius='md'
                        onClick={() => router.push('/new')}
                    >New Codeet</Button>
                </Group>
                <Codeet postedAt={'10 minutes ago'} body={'Wassup. Look at the great code I have done!!!'} author={{
                    name: '@manudithur',
                    image: ''
                }}></Codeet>
                <Codeet postedAt={'10 minutes ago'} body={'Wassup. Look at the great code I have done!!!'} author={{
                    name: '@manudithur',
                    image: ''
                }}></Codeet>
                <Codeet postedAt={'10 minutes ago'} body={'Wassup. Look at the great code I have done!!!'} author={{
                    name: '@manudithur',
                    image: ''
                }}></Codeet>
                <Codeet postedAt={'10 minutes ago'} body={'Wassup. Look at the great code I have done!!!'} author={{
                    name: '@manudithur',
                    image: ''
                }}></Codeet>
                <Codeet postedAt={'10 minutes ago'} body={'Wassup. Look at the great code I have done!!!'} author={{
                    name: '@manudithur',
                    image: ''
                }}></Codeet>
                </ScrollArea>
            </Grid.Col>
            <Grid.Col span={2}></Grid.Col>
        </Grid>
    )
}