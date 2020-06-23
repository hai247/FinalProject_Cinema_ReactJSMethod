import React from 'react'
import { Route } from 'react-router-dom'
import Navbars from './../components/navbars'
import Carousel from './../components/carousel'
function HomeLayout(props) {
    return (
        <div>
            <Navbars />
            <Carousel />
            {props.children}
        </div>
    )
}

export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <HomeLayout>
                    <Component {...propsComponent} />
                </HomeLayout>
            )}
        />
    )
}
