import React, { useEffect, useContext } from "react";
import MainLayout from "../layout/MainLayout";
import { supabase } from "../Utils/supabase";
import { SessionContext } from "../contexts/SessionContext";

const Profile = () => {
    const session = useContext(SessionContext);

    useEffect(() => {
        const fetchProfile = async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select()
                .eq("id", session.user.id)
                .single();
            if (error) alert(error);
            if (data) console.log("data", data);
        };

        if (session) {
            fetchProfile();
        }
    }, [session]);
    return <MainLayout>This is the profile page</MainLayout>;
};

export default Profile;