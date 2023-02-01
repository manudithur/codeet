type UserProfile = {
    followers: Array<Number>,
    following: Array<Number>,
    codeets: Array<Number>
    username: string
} | null

export function getUserProfile(): UserProfile{
    return null;
}

export function addUserFollower(follower: Number){

}

export function removeUserFollower(follower: Number){

}

export function addCodeetToUser(codeetID: Number){

}

export function updateUsername(newUsername: String){
    
}