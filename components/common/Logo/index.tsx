import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = ({ href }: { href?: string }) => {
    href = href || '/'
    return (
        <Link href={href}>
            <a>
                <span className="sr-only">FormyAI</span>
                <Image src="/logo.svg" width={95} height={24} alt="FormyAI logo" />
            </a>
        </Link>
    )
}

export { Logo }