import Header from "../Header/Header"
import '../../../src/App.css'
import { Button, CircularProgress, LinearProgress } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { SaveReportsCard } from "./FileCard"


export const SaveReportsSection = () => {

    const navigate = useNavigate();
    const [fetchedFiles, setFetchedFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   
    const [isFileLoading, setIsFileLoading] = useState(false);
    const [title, setTitle] = useState();
    const [file, setFile] = useState();
    const username = localStorage.getItem("username");

    useEffect(() => {
        if (!username) {
            navigate("/login")
        }
        else {
            setIsFileLoading(true);
            const getPdf = async () => {
                try {
                    const response = await axios.get(`https://bookwellcare.onrender.com/fetchReports?username=${username}`);
                    setFetchedFiles(response.data.files);
                    setIsFileLoading(false);

                }
                catch (e) {
                    setIsFileLoading(false);
                    console.log(e.response.data.msg);
                }
            }

            getPdf();

        }
    }, [])

    const uploadFile = async (e) => {


        e.preventDefault();


        if (title) {
            const formData = new FormData();
            formData.append("username", username)
            formData.append("title", title);
            formData.append("file", file);

            if (!file) {
                window.alert("Pdf File is Requierd")
            }
            else if (file.type != "application/pdf") {
                window.alert("Upload Pdf Files Only")
            }

            else {
                setIsLoading(true);
                try {
                    const response = await axios.post(`https://bookwellcare.onrender.com/uploadFiles`, formData, {
                        headers: { "Content-Type": "multipart/form-data" }
                    })

                    setIsLoading(false);
                    window.alert("Report Saved Successfully")
                    window.location.reload();
                } catch (e) {
                    setIsLoading(false);
                    console.log(e);
                }
            }
        } else {
            window.alert("Title is Required")
        }

    }


    return (


        <>
            <Header />
            <div className="mt-24  flex justify-center">

                <div className="mt-4 mx-10 flex flex-col justify-center  items-center py-8  px-14 rounded-lg shadow-lg upload-container gap-4 bg-white">
                    <h1 className="text-xl md:text-3xl font-medium">Save Your Medical Report</h1>

                    <form style={{ textAlign: "center" }}>

                        <input className="text-lg my-8 p-4 border-2 w-full rounded-md"
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="Title of Medical Report"
                            name="title"
                            id="title"

                            required
                        />


                        <input type="file"
                            onChange={(e) => { setFile(e.target.files[0]) }}
                        /> <br /> <br />
                        <Button type="submit"
                            onClick={uploadFile}
                            disableElevation
                            required
                            size="large"
                            variant="contained"

                        >

                            {isLoading ? <CircularProgress color="inherit" /> : "Upload"}

                        </Button>

                    </form>
                </div>

            </div>


            <div className="grid  bg-white rounded-lg shadow-lg p-12 lg:grid-cols-4 grid-cols-1 md:grid-cols-2  gap-5 m-8">

                {isFileLoading ? <LinearProgress /> :

                    fetchedFiles.length != 0 ?

                        fetchedFiles.map((file) => {
                            return (<SaveReportsCard key={Math.random()} props={file} />)
                        }) : <h1 >No Reports Saved Yet !</h1>



                }
            </div>
        </>

    )

}