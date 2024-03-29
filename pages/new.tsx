
import { ActionIcon, Button, Container, Group, ScrollArea, Select, Textarea, TextInput, Title } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons";
import { useRouter } from "next/router";

export default function New(){

    const router = useRouter()

    const handleKeyDown = (event: { key: string; preventDefault: () => void; target: any; }) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            const textarea = event.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 1;
        }
    }
    return(
        <Container>
            <ActionIcon mt={50}>
                <IconArrowLeft size={30} color="black" onClick={() => router.back()} />
            </ActionIcon>
            <ScrollArea style={{height: '90vh'}} type={'never'} offsetScrollbars pt={50}>
                <Title pb={30}>New Codeet</Title>
                <TextInput placeholder="Title" maxLength={50} size={"lg"} pb={30} radius={"md"}></TextInput>
                <Textarea placeholder="Enter description" radius={"md"} size={"md"} minRows={4} autosize pb={30}></Textarea>
                <Textarea id={"textbox"} onKeyDown={handleKeyDown} placeholder="Enter code" radius={"md"} size={"md"} minRows={8} autosize></Textarea>
                <Group position="apart" pt={30}>
                    <Select
                        placeholder="Language"
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' },
                        ]}
                        size={'md'}
                        radius={'md'}
                    />
                    <Button size='lg' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}radius='md'
                    >Publish</Button>
                </Group>
            </ScrollArea>
        </Container>
    )
}
