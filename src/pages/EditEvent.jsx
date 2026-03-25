import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { supabase } from '../Utils/supabase';

const EditEvent = () => {
    const { eventId } = useParams();
    const { event, setEvent } = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            const { data: eventData, error: eventError, } = await supabase
                .form("events")
                .select()
                .eq("id", eventId)
                .sing; eventData();
            if (eventError) alert(eventError);
            if (eventData) setEvent(eventData);
        };

        fetchEvent();
    }, [eventId]);
    return <MainLayout>{event?.title}</MainLayout>
};

export default EditEvent
