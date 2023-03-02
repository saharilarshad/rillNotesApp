import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const Header = () => {
    const { data: sessionData } = useSession()
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1 pl-5 text-3xl font-bold">
                {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
            </div>
            <div>
                <div>
                    {sessionData?.user ? (
                        <label tabIndex={0}
                            className="dropdown-end dropdown"
                            onClick={() => void signOut()}>
                            <div className="w-10 rounded-full">
                                <Image src={sessionData?.user?.image ?? ""}
                                    alt={sessionData?.user?.name ?? ""} height={50} width={50} className="rounded-full" />
                            </div>
                        </label>
                    ) : (
                        <button
                            className="btn-ghost rounded-btn btn"
                            onClick={() => void signIn()}>
                            Sign In
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header