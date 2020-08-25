import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'
import ApplicationFormPage from './ApplicationFormPage'
import LoginPage from './LoginPage'
import CreateTripPage from './CreateTripPage'
import ListTripsPage from './ListTripsPage'
import TripDetailsPage from './TripDetailsPage'

function Router () {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/application-form">
                    <ApplicationFormPage/>
                </Route>
                <Route exact path = "/login">
                    <LoginPage/>
                </Route>
                <Route exact path = "/trips/create">
                    <CreateTripPage/>
                </Route>
                <Route exact path = "/trips/list">
                    <ListTripsPage/>
                </Route>
                <Route exact path = "/trips/details/:tripId">
                    <TripDetailsPage/>
                </Route>
                <Route exact path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router