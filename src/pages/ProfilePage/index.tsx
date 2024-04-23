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
import CommentSectionModal from '../../components/Modals/CommentModal';
import { createPortal } from 'react-dom';
import FilterComments from '../../components/FilterComments';
import ArtistSideBar from '../../components/Layout/ArtistSideBar';

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
    const modalRef = useRef<any>();

    const handleClick = ()=>{
        setUpdate(!update)

        if((user === undefined) || (user.username === '' && user.mbtiType ==='')){

            modalRef.current.showModal();
            console.log('amirrrrrrrrrrrrrrrrrrrr')
        }
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


    console.log('data: ' , data)
    console.log("state: " , state);
    console.log("Comments: " , data?.comments);
    

    return (
        <div className="profilePage"> 

        {createPortal(
        <CommentSectionModal ref={modalRef} />,
        document.body
      )}
        
        <div className="communitySection">

        </div>

            <div className="profileContent">

                <div className="profileContainer">

                    <Profile profileName={data?.name} profileCareer={data?.career} profilePhoto={data?.photoUrl}
                    profileType={data?.type}  profileBioGraphy={data?.bioGraphy} />

                </div>


                <div className="commentsWrapper mt-20">


                    <div className="titleContainer mb-5">
                        <div className="titleWrapper w-[50%]">
                        <h1 className='title text-[1.5rem]'> دیدگاه کاربران </h1> </div>
                    </div>

                    <div className="addCommentSection mb-20">
                        <AddCommentSection artist={data!} user={user} onclick={handleClick} />    
                    </div>

                    {/* <div className="filterCommentsWrapper mb-5">
                        <FilterComments />
                    </div> */}

                    <div className="commentListWrapper">
                        <CommentList artistName={data?.name} comments={data?.comments} ref={ref} updateProp={update}/>
                    </div>
                </div>

            </div>


            <div className="artistSideBarWrapper">
                <ArtistSideBar  />
            </div>

         </div>
    )
}