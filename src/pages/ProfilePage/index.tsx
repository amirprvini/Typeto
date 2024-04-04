import { useContext, useEffect, useRef, useState } from 'react';
import { SideBar } from '../../components/Layout/SideBar';
import './index.css';
import { AXIOS } from '../../config/axios.config';
import { API_URLS } from '../../constants/api.urls';
import { object } from 'yup';
import { Profile } from '../../components/Profile';
import { CommentSection } from '../../components/CommentSection';
import { AddCommentSection } from '../../components/AddCommentSection';
import { CommentList } from '../../components/CommentList';
import { commentType } from '../../components/CommentSection';
import { AppContext } from '../../components/context/store';
import { FormProps, useLocation, useParams } from 'react-router-dom';
import { UseArtistQuery } from '../../components/services/queries/useArtistQuery';

interface ProfilePageProps {
    
}


export const ProfilePage : React.FC<ProfilePageProps>=():JSX.Element =>{



    const params = useParams() ; 
    const {user} = useContext(AppContext) ; 
    
    const { isLoading, isSuccess, isError, data, error, refetch } = UseArtistQuery(params.id || ''); 

    type profileType = {
        name : string ,
        id : number , 
        career : string ,
        type : string ,
        photoUrl : string ,
        bioGraphy : string,
        comments : commentType[]
    }

    type FormProps = {
        username : string ; 
        email : string ;
        phoneNumber : string ;
        password : string ;
        confirmPassword : string ;
        token : string ;
        isAuthenticated : boolean
    }

    const [state,setState] = useState<profileType>() ; 
    const [info,setInfo] = useState<FormProps>();
    const [update , setUpdate] = useState<boolean>(false) ; 
    const ref = useRef<any>();

    // const fetchArtists = async (profileName:string)=>{
    //     const response = await AXIOS.get(API_URLS.GetArtists);
    //     response.data.map((item:any)=>{
    //         if(profileName === item.name.toLowerCase().split(' ').join(''))
    //         setState(item);
    //     })       
    // }



    const handleClick = ()=>{
        setUpdate(!update)
    }


    const handleUpdateInList = () : boolean =>{
        return update ; 
    }

    useEffect(()=>{
        setInfo({...user});
        console.log('get artist from query: ', data);
        console.log('get user from context: ', user);
    },[])



    useEffect(()=>{

        // fetchArtists("mehradhidden").then(()=>{
        //     // setUpdate(!update);
        //     console.log("update: " , update);
        //     // console.log("global user in profile page: ",data!.username)
        //     // console.log("list state: " , ref.current.state)
        // })
        

    },[update])


    console.log("state: " , state);
    console.log("Comments: " , state?.comments);
    

    return (
        <div className="profilePage"> 
        
        <div className="communitySection">

        </div>

            <div className="profileContent">

                <div className="profileContainer">

                    <Profile profileName={data?.name} profileCareer={data?.career} profilePhoto={data?.photoUrl}
                    profileType={data?.type}  profileBioGraphy={data?.bioGraphy} />

                </div>


                <div className="commentsWrapper mt-20">

                    <div className="titleContainer mb-8">
                        <div className="titleWrapper w-[50%]">
                        <h1 className='title text-[1.5rem]'> دیدگاه کاربران </h1> </div>
                    </div>


                    <div className="addCommentSection mb-20">
                        <AddCommentSection artist={data!} user={user} onclick={handleClick} />
                    </div>

                    <div className="commentListWrapper">
                        <CommentList artistName={data?.name} comments={data?.comments} ref={ref} updateProp={update}/>
                    </div>
                </div>

            </div>


            <div className="SideBar">
                <SideBar />
            </div>

         </div>
    )
}