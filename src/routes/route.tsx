import React, {lazy,Suspense} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import { HomePage } from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import { FamePeopleWithSpecialTypes } from '../pages/FamePeopleWithSpecialTypes'
import { FamousPeoplePage } from '../pages/FamousPeoplePage'
import { LoginPage } from '../pages/LoginPage'
import PersonalityTypesPage from '../pages/PersonalityTypesPage'
import { ProfilePage } from '../pages/ProfilePage'
import { SignUpPage } from '../pages/SignUpPage'
import TypesInfoPage from '../pages/TypesInfoPage'
import { UserProfile } from '../components/Buttons/UserProfile'
import UserProfilePage from '../pages/UserProfilePage'
import EditUserProfilePage from '../pages/EditUserProfilePage'
import SignOut from '../components/LogOut'

interface IRouteProvider {}

// const SignUpPage = lazy(()=>import('/signUp'));

export const RouteProvider : React.FC<IRouteProvider> = () :JSX.Element => {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>

            <Route index element={<HomePage/>}/>
            <Route path='/signUp' element={ <SignUpPage /> } />
            <Route path='/login' element={<LoginPage/>}/>

            <Route path='/home' element={<HomePage/>}/>
            <Route path='/personalitytypes' element={<PersonalityTypesPage/>}/>
            <Route path='/famouspeople' element={<FamousPeoplePage/>}/>
            <Route path='/memes' element={<HomePage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>

            <Route path='/profile/:id' element={<ProfilePage/>}/>

            <Route path='/userProfile/' element={<UserProfilePage/>}/>
            <Route path='/userProfile/editProfile' element={<EditUserProfilePage/>} />
            <Route path='/userProfile/signOut' element={<SignOut/>} />
            
            <Route path='/personalitytypes/:type' element={<TypesInfoPage />}/>
            
            <Route path='/famepeopletypes/:type' element={<FamePeopleWithSpecialTypes />}/>
            
          </Route>

      </Routes>
    </BrowserRouter>

  )
}
