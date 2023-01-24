import { Button } from "@mantine/core";
import { getCurrentUser } from "../backend/firebase";

function testAction(){
    var user = getCurrentUser()
    alert(user)
}

export default function Test(){
    return (
        <Button onClick={() => testAction()}></Button>
    )
}