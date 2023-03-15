/* eslint-disable react/jsx-no-undef */
// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import Home from './components/Home/Home'
import SignIn from './components/SignIn/SignIn'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route notfound page={NotFoundPage} />
      <Route path="/sign-in" page={SignIn} name="signIn" />
      <Set wrap={MainLayout} private unauthenticated="signIn">
        <Route path="/" page={Home} name="home" />
      </Set>
    </Router>
  )
}

export default Routes
