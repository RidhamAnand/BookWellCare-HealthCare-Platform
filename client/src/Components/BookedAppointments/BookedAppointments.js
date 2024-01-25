import axios from "axios";
import { useEffect, useState } from "react";
import { BookedAppointmentsCard } from "./BookedAppointmentsCard";
import Header from "../Header/Header";
import { LinearProgress } from "@mui/material";

export const BookedAppointments = () => {

    const [bookedAppointments, setBookedAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const username = localStorage.getItem("username");

    useEffect(() => {

        // making get reuest to server for fetching booked appointments
        async function fetchAppointments() {
            setIsLoading(true);

            try {


                const response = await axios.get(`https://bookwellcare.onrender.com/bookedAppointments?username=${username}`);

                setBookedAppointments(response.data.appointments);
                setIsLoading(false);



            }
            catch (e) {
                setIsLoading(false);
                console.log(`error ${e}`);
            }






        }
        fetchAppointments();
    }
        , [])

    return (
        <>
            <Header />
            <h1 className="mt-24 text-2xl md:text-4xl shadow-lg bg-white mx-10 rounded-lg py-4  text-black font-medium ">Booked Appointments</h1>
            {




                isLoading ? <LinearProgress /> :



                    bookedAppointments.length !== 0 ? (
                        bookedAppointments.map((appointment) => <BookedAppointmentsCard key={Math.random()} data={appointment} />)
                    ) : (
                        <h1 className="mt-8 text-2xl">You Have not Booked Any Appointments Yet</h1>
                    )}

        </>
    )



}