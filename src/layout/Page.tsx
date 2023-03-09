import React from 'react'
import { Outlet } from 'react-router-dom'

type PageProps = {

}

const Page: React.FC<PageProps> = () => {
    return (
        <React.Fragment>
        <Outlet/>
        </React.Fragment>
    )
}
export default Page