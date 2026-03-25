import React from "react";
import MainLayout from "../layout/MainLayout";
import { Link } from "react-router";
import { supabase } from "../Utils/supabase";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const ManageEvents = () => {
    const [events, setEvents] = useState(null);
    useEffect(() => {
        const fetchEvents = async () => {
            const { data: eventsData, error: eventsError } = await supabase
                .from("events")
                .select();
            if (eventsError) alert(eventsError)
            if (eventsData) setEvents(eventsData);
        };

        fetchEvents();
    }, []);
    return (
        <MainLayout>
            <div className="pt-5">
                <div className="text-right">
                    <Link to="/add-event" className="btn btn-primary rounded-full">
                        Add Event
                    </Link>

                </div>
                <div>
                    {events?.map((event) => {
                        return <EventCard event={event} />;

                    })}
                </div>
            </div>
        </MainLayout>
    );
};

export default ManageEvents;