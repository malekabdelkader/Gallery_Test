import {useState,useEffect} from "react"
import {getAlbums} from "../services/albums"
import Spinner from "../Components/Spinner/Spinner"
import './home.css'
import NavBar from "../Components/NavBar/NavBar"
const Home=()=>{
    const [isLoadingState, setisLoading] = useState(false)
    const [NumberPhotoState, setNumberPhoto] = useState(10)
    const [photosState, setPhotos] = useState([])
    useEffect(() => {
        getAlbumsHandler()
    }, [])
    const getAlbumsHandler= async ()=>{
        setisLoading(true);
        const response=await getAlbums();
        let gallery=[]
        console.log(response)
        if(response){
            response.map((element)=>{
                
                if((element.id).toString().endsWith("01") ||(element.id).toString()==="1"){
                    gallery.push(element)
                }
            })
            
           console.log(photosState);
        }
        setPhotos(gallery)
        setisLoading(false)
    }
    const plusTenPhotos=()=>{
        if(NumberPhotoState<50){
            setNumberPhoto(NumberPhotoState+10)
            window.scrollTo(0,document.body.scrollHeight);
        }else{
            alert("No more photos!")
        }
    }




    return(
        <div>
            <NavBar NumberOfPhoto={NumberPhotoState} MorePhotos={plusTenPhotos}/><br/>
            {isLoadingState ? <Spinner />:
            <div className="flex-container">
                
           { photosState.slice(0,NumberPhotoState).map((element)=>{return <img id={element.id} src={element.url}/>})}
           
            </div>
            }

        </div>
    )
}
export default Home