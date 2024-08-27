import { useContext, useEffect, useRef} from 'react';
import { Profile } from '../../components/Profile';
import { AddCommentSection} from '../../components/AddCommentSection';
import { CommentList } from '../../components/CommentList';
import { AppContext } from '../../components/context/store';
import {useParams } from 'react-router-dom';
import { UseArtistQuery } from '../../components/services/queries/useArtistQuery';
import CommentSectionModal from '../../components/Modals/CommentModal';
import { createPortal } from 'react-dom';
import ArtistSideBar from '../../components/Layout/ArtistSideBar';
import { commentProps } from '../../components/context/types/comment.type';

interface ProfilePageProps {}

export const ProfilePage : React.FC<ProfilePageProps>=():JSX.Element =>{

    const {updateComments,setUpdateComments} = useContext(AppContext) ; 
    
    const params = useParams() ; 
    const {user} = useContext(AppContext) ; 
    const {data} = UseArtistQuery(params.id || '');
    const ref = useRef<any>();
    const modalRef = useRef<any>();


    const handleScrolToTop = ()=>{
        window.scrollTo(0,0);
    }

    const handleClick = ()=>{

        setUpdateComments(!updateComments)

        if((user === undefined) || (user.phoneNumber === '')){

            modalRef.current.showModal();
        }
    }

    useEffect(()=>{

        console.log('artist data: ' , data) ;

    },[updateComments])


    return (
        <div className="profilePage w-full flex justify-around space-x-2 px-2 lg:px-6" onLoad={()=>{
            setUpdateComments(!updateComments)
            handleScrolToTop()
        }}> 

        {createPortal(
        <CommentSectionModal ref={modalRef} />,
        document.body
      )}

            <div className="hidden lg:block artistSideBarWrapper w-1/3 bg-black text-white">
                <ArtistSideBar />
            </div>

            <div className="profileContent w-4/5 lg:w-2/3  flex flex-col items-center">

                <div className="profileContainer w-full lg:w-3/4">

                    <Profile profileName={data?.name} profileCareer={data?.career} profilePhoto={data?.photoUrl}
                    profileType={data?.type}  profileBioGraphy={data?.bioGraphy} />

                </div>


                <div className="relativeprofilesWrapper lg:hidden w-full text-white my-8">
                    <ArtistSideBar />
                </div>

                <div className="commentsWrapper mt-20 w-3/4 sm:w-3/5">


                    <div className="titleContainer mb-5">
                        <div className="titleWrapper w-[50%]">
                        <h1 className='title text-[1.5rem] font-semibold font-iranian-sans'> دیدگاه کاربران </h1> </div>
                    </div>

                    <div className="addCommentSection mb-20">
                        <AddCommentSection artist={data!} user={user} onclick={handleClick} onComplete={(comment:commentProps,id:string)=>{
                            console.log('2/// comment in on complete add cm section: ' , comment);
                           setUpdateComments(!updateComments) }}/>    
                    </div>

                    <div className="commentListWrapper">
                        <CommentList artistId={data?.id || ''} 
                        comments={data?.comments.reverse()} 
                        ref={ref} updateProp={updateComments} onComplete={(cmID)=>{
                            console.log('cm Id in oncomplete list',cmID) }}/>
                    </div>

                </div>

            </div>

         </div>
    )
}