import React from 'react'
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

interface IRouteProvider {}
export const RouteProvider : React.FC = () :JSX.Element => {
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

            {/* <Route path={'/profile/:id'} element={<ProfilePage/>}/> */}
            <Route path={'/profile/:id'} element={<ProfilePage/>}/>

            <Route path='/userProfile' element={<UserProfilePage/>} />


            <Route path='/personalitytypes/INFJ' element={<TypesInfoPage title='INFG'/>}/>
            <Route path='/personalitytypes/INFP' element={<TypesInfoPage title='INFP'/>}/>
            <Route path='/personalitytypes/INTP' element={<TypesInfoPage title='INTP'/>}/>
            <Route path='/personalitytypes/INTJ' element={<TypesInfoPage title='INTJ'/>}/>
            <Route path='/personalitytypes/ENTP' element={<TypesInfoPage title='ENTP'/>}/>
            <Route path='/personalitytypes/ENFP' element={<TypesInfoPage title='ENFP'/>}/>
            <Route path='/personalitytypes/ISTP' element={<TypesInfoPage title='ISTP'/>}/>
            <Route path='/personalitytypes/ISFP' element={<TypesInfoPage title='ISFP'/>}/>
            <Route path='/personalitytypes/ENTJ' element={<TypesInfoPage title='ENTJ'/>}/>
            <Route path='/personalitytypes/ENFJ' element={<TypesInfoPage title='ENFJ'/>}/>
            <Route path='/personalitytypes/ISTJ' element={<TypesInfoPage title='ISTJ'/>}/>
            <Route path='/personalitytypes/ESTP' element={<TypesInfoPage title='ESTP'/>}/>
            <Route path='/personalitytypes/ESTP' element={<TypesInfoPage title='ESTP'/>}/>
            <Route path='/personalitytypes/ESFP' element={<TypesInfoPage title='ESFP'/>}/>
            <Route path='/personalitytypes/ESEI' element={<TypesInfoPage title='ESEI'/>}/>
            <Route path='/personalitytypes/ESTI' element={<TypesInfoPage title='ESTI'/>}/>

            <Route path='/famepeopletypes/INFG' element={<FamePeopleWithSpecialTypes title='INFG' />}/>
            <Route path='/famepeopletypes/INFP' element={<FamePeopleWithSpecialTypes title='INFP' />}/>
            <Route path='/famepeopletypes/INTP' element={<FamePeopleWithSpecialTypes title='INTP' />}/>
            <Route path='/famepeopletypes/INTJ' element={<FamePeopleWithSpecialTypes title='INTJ' />}/>
            <Route path='/famepeopletypes/ENTP' element={<FamePeopleWithSpecialTypes title='ENTP' />}/>
            <Route path='/famepeopletypes/ENFP' element={<FamePeopleWithSpecialTypes title='ENFP' />}/>
            <Route path='/famepeopletypes/ISTP' element={<FamePeopleWithSpecialTypes title='ISTP' />}/>
            <Route path='/famepeopletypes/ISFP' element={<FamePeopleWithSpecialTypes title='ISFP' />}/>
            <Route path='/famepeopletypes/ENTJ' element={<FamePeopleWithSpecialTypes title='ENTJ' />}/>
            <Route path='/famepeopletypes/ENFJ' element={<FamePeopleWithSpecialTypes title='ENFJ' />}/>
            <Route path='/famepeopletypes/ISTJ' element={<FamePeopleWithSpecialTypes title='ISTJ' />}/>
            <Route path='/famepeopletypes/ESTP' element={<FamePeopleWithSpecialTypes title='ESTP' />}/>
            <Route path='/famepeopletypes/ESTP' element={<FamePeopleWithSpecialTypes title='ESTP' />}/>
            <Route path='/famepeopletypes/ESFP' element={<FamePeopleWithSpecialTypes title='ESFP' />}/>
            <Route path='/famepeopletypes/ESEI' element={<FamePeopleWithSpecialTypes title='ESEI' />}/>
            <Route path='/famepeopletypes/ESTI' element={<FamePeopleWithSpecialTypes title='ESTI' />}/>

          </Route>

      </Routes>
    </BrowserRouter>

  )
}
