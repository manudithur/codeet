import { Button, Container, Grid, Group, ScrollArea, Title } from "@mantine/core";
import Codeet from "../components/codeet";

export default function Home(){
    return (
        <Grid pt={50}>

            <Grid.Col span={2}></Grid.Col>
            <Grid.Col span={8}>
            <ScrollArea style={{height: 800}} type={'never'} offsetScrollbars>
                <Group position="apart" pb={30}>
                    <Title>Your Feed</Title>
                    <Button size='lg' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}radius='md'>New Codeet</Button>
                </Group>
                <Codeet postedAt={'10 minutes ago'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla nisl, porta eget enim quis, porttitor ultricies tortor. Morbi eleifend augue leo, et dictum justo viverra vel. Donec magna sapien, semper quis malesuada at, hendrerit vitae nibh. Nam facilisis id ante id faucibus. Sed pretium pharetra elit, quis faucibus arcu.'} author={{
                    name: '@manudithur',
                    image: ''
                }}></Codeet>
                <Codeet postedAt={'10 minutes ago'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla nisl, porta eget enim quis, porttitor ultricies tortor. Morbi eleifend augue leo, et dictum justo viverra vel. Donec magna sapien, semper quis malesuada at, hendrerit vitae nibh. Nam facilisis id ante id faucibus. Sed pretium pharetra elit, quis faucibus arcu.'} author={{
                    name: '@manudithur',
                    image: ''
                }}></Codeet>
                <Codeet postedAt={'10 minutes ago'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla nisl, porta eget enim quis, porttitor ultricies tortor. Morbi eleifend augue leo, et dictum justo viverra vel. Donec magna sapien, semper quis malesuada at, hendrerit vitae nibh. Nam facilisis id ante id faucibus. Sed pretium pharetra elit, quis faucibus arcu.'} author={{
                    name: '@manudithur',
                    image: ''
                }}></Codeet>
                <Codeet postedAt={'10 minutes ago'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla nisl, porta eget enim quis, porttitor ultricies tortor. Morbi eleifend augue leo, et dictum justo viverra vel. Donec magna sapien, semper quis malesuada at, hendrerit vitae nibh. Nam facilisis id ante id faucibus. Sed pretium pharetra elit, quis faucibus arcu.'} author={{
                    name: '@manudithur',
                    image: ''
                }}></Codeet>
                <Codeet postedAt={'10 minutes ago'} body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla nisl, porta eget enim quis, porttitor ultricies tortor. Morbi eleifend augue leo, et dictum justo viverra vel. Donec magna sapien, semper quis malesuada at, hendrerit vitae nibh. Nam facilisis id ante id faucibus. Sed pretium pharetra elit, quis faucibus arcu.'} author={{
                    name: '@manudithur',
                    image: ''
                }}></Codeet>
                </ScrollArea>
            </Grid.Col>
            <Grid.Col span={2}></Grid.Col>
        </Grid>
    )
}