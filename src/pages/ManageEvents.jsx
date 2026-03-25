import React from "react";
import MainLayout from "../layout/MainLayout";
import { Link } from "react-router";

const ManageEvents = () => {
    return (
        <MainLayout>
            <div className="pt-5">
                <div>We load the events here</div>
                <div className="text-right">
                    <Link to="/add-event" className="btn btn-primary rounded-full">
                        Add Event
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
};

export default ManageEvents;