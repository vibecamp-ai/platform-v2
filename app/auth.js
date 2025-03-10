import nextAuth from "next-auth";

const config = {
    providers: []
}


export const { handlers, signIn, signOut, auth } = nextAuth(config)