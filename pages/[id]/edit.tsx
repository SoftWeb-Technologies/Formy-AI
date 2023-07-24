import * as React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { useAtom } from 'jotai'

import { Sidebar } from '../../components/Editor/Sidebar'
import { EditorNavbar } from '../../components/Editor/EditorNavbar'
import { EditorHeader } from '../../components/Editor/EditorHeader'
import { EditablePage } from '../../components/Editor/EditablePage'
import { sidebarAtom } from '../create'
import {
    blocksAtom,
    headerAtom,
    optionsAtom,
    styleAtom,
    titleAtom,
} from '../../lib/atoms/form'
import { Layout } from '../../components/Layout'
import { SEO } from '../../components/SEO'
import { OverlayPage } from '../../components/common/OverlayPage'

interface PageProps {
    form: any
    notAllowed: boolean
}

const EditPage: NextPage<PageProps> = ({ form, notAllowed }) => {
    const [showSidebar, toggleSidebar] = useAtom(sidebarAtom)
    const [title, setTitle] = useAtom(titleAtom)
    const [header, setHeader] = useAtom(headerAtom)
    const [style, setStyle] = useAtom(styleAtom)
    const [options, setOptions] = useAtom(optionsAtom)
    const [blocks, setBlocks] = useAtom(blocksAtom)

    React.useEffect(() => {
        if (form) {
            setTitle(form.title)
            setHeader(form.header)
            setStyle(form.style)
            setOptions(form.options)
            setBlocks(form.blocks)
        }
    }, [form, setTitle, setHeader, setStyle, setOptions, setBlocks])

    if (notAllowed) {
        return (
            <OverlayPage
                title="Not allowed"
                description="You can't access this page"
            />
        )
    }

    return (
        // eslint-disable-next-line react/no-children-prop
        <Layout>
            <SEO title={title ? title : 'Untitled form'} icon={header.icon} />
            <Sidebar show={showSidebar} />
            <section className="w-screen h-screen overflow-y-auto flex-1 shadow-lg ring-1 ring-black/10">
                <EditorNavbar
                    title={title}
                    icon={header.icon}
                    style={style}
                    options={options}
                    toggleSidebar={toggleSidebar}
                    workspace={form.workspace}
                />
                <EditorHeader header={header} style={style} />
                <EditablePage title={title} blocks={blocks} style={style} />
            </section>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    req,
    res,
    query,
}) => {
    //const session = Getsession(req, res)
    //const user = session && session.user

    if (!user) {
        return {
            redirect: {
                destination: `/api/auth/login?returnTo=/${query.id}/edit`,
                permanent: false,
            },
        }
    }

    const formReq = await fetch(`${process.env.DB_URL}`, {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${process.env.TOKENURL_TOKEN}`,
        },
        body: JSON.stringify({
            operation: 'sql',
            sql: `SELECT * FROM typiform.forms WHERE id='${query.id}'`,
        }),
    })
    const formRes = await formReq.json()
    const form = formRes[0]

    // formRes returns an empty array if no form is found on DB
    if (formRes <= 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            //user,
            form: form,
            //notAllowed: form.workspace !== user.sub,
        },
    }
}

export { EditPage }