import React from "react";
import Input from "../components/form/Input";
import MainLayout from "../layout/MainLayout";
import Card from "../components/Card";
import ApplyIcon from "../components/icons/ApplyIcon";



const SignUp = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log("formData", formData.get("firstname"));
        const signupForm = {
            firstname: formData.get("firstname"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const { data, error } = await supabase.auth.signUp({
            email: signupForm.email,
            password: signupForm.password,
        })
    };

    return (
        <MainLayout>
            <div className="flex justify-center items-center min-h-screen bg-white-100">
                <Card>
                    <h1 className="text-2xl font-bold mb-4 text-left">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <Input
                            label="Firstname"
                            type="text"
                            placeholder="Enter your Name"
                            name="firstname"
                        />
                        <Input
                            label="Lastname"
                            type="text"
                            placeholder="Enter your Last Name"
                            name="lastname"
                        />
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your Email"
                            name="email"
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your Password"
                            name="password"
                        />
                        <div className="flex justify-left mt-4">
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors"
                            >
                                <ApplyIcon className="w-5 h-5" />
                                Submit
                            </button>
                        </div>
                    </form>
                </Card>
            </div>
        </MainLayout >
    );
};

export default SignUp;