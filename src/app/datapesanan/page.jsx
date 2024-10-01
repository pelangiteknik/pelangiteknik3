'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()
    const handleSignOut = async () => {
        await signOut({
            redirect: false,
        })
        router.push('/');
    }

    return (
        <div onClick={handleSignOut}>Sign OUT</div>
    )
}
