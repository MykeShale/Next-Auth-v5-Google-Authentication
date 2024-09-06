
import { auth, signIn, signOut } from "@/auth"
import { copyFileSync } from "fs"

export default async function SignIn() {
    const session = await auth()
    console.log(session)

    const user = session?.user

    return user ?
        (
            <>
                <h1 className="text-2xl">Welcome {user.name}</h1>
                <form
                    action={async () => {
                        "use server"
                        await signOut()
                    }}
                >
                    <button className='p-2 border-2 bg-blue-400'>SignOut</button>
                </form>



            </>
        )
        :
        (
            <>
                <h1 className="text2-xl">You are not Authenticated. Click below to Sign In</h1>
                <form
                    action={async () => {
                        "use server"
                        await signIn("google", {redirectTo:'/secret'})
                    }}
                >
                    <button className='p-2 border-2 bg-blue-400'>Sign In</button>
                </form>
            </>
        )
}