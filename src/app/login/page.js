"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Login = () => {
    const YourFormSchema = Yup.object({
        phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{8}$/, 'Please enter a valid 8-digit phone number.'),
        email: Yup.string()
        .required('Email is required.')
        .matches( /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Please enter a valid email address.'),
        date: Yup.date()
            .required("Date is required")
            .typeError("Please enter a valid date")
            .max(new Date(), "Date cannot be in the future"),
        time: Yup.string().required("Time is required"),
        fullName: Yup.string().required("Full Name is required"),
        
      
    });
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(YourFormSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
            >
                <div className="mb-4">
                    <label
                        className="block text-indigo-900 text-sm font-bold mb-2"
                        htmlFor="fullName"
                    >
                        Full Name:
                    </label>
                    <Controller
                        control={control}
                        name="fullName"
                        rules={{ required: "Full Name is required" }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder=" Full Name"
                            />
                        )}
                    />
                    {errors.fullName && (
                        <p className="text-red-500 text-xs italic">
                            {errors.fullName.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        className="block text-indigo-900 text-sm font-bold mb-2"
                        htmlFor="phoneNumber"
                    >
                        Phone Number:
                    </label>
                    <Controller
                        control={control}
                        name="phoneNumber"
                        rules={{
                            required: "Phone Number is required",
                           
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="tel"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your phone number"
                            />
                        )}
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-xs italic">
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-indigo-900 text-sm font-bold mb-2">
                        Email:
                    </label>
                    <Controller
                        control={control}
                        name="email"

                        render={({ field }) => (
                            <input
                                {...field}
                                type="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter email"
                            />
                        )}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="flex gap-4">
                    <div className="mb-4 w-1/2">
                        <label className="block text-indigo-900 font-bold text-sm  mb-2">
                            Date (mm/dd/yyyy):
                        </label>
                        <Controller
                            control={control}
                            name="date"
                            render={({ field }) => (
                                <input
                                    type="date"
                                    {...register("date")}
                                    {...field}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 font-normal text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter Date"
                                />
                            )}
                        />
                        {errors.date && (
                            <p className="text-red-500 text-xs italic">
                                {errors.date.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-4 w-1/2">
                        <label className="block text-indigo-900 font-bold text-sm mb-2">
                            Time (--:-- --):
                        </label>
                        <Controller
                            control={control}
                            name="time"
                            rules={{ required: "Time is required" }}
                            render={({ field }) => (
                                <input
                                    type="time"
                                    {...field}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 font-normal text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter Time"
                                />
                            )}
                        />
                        {errors.time && (
                            <p className="text-red-500 text-xs italic">
                                {errors.time.message}
                            </p>
                        )}
                    </div>
                </div>
                <label className="block text-indigo-900 text-sm font-bold mb-2 ">
                    Address Details
                </label>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="col-span-2 md:col-span-1 ">
                        <Controller
                            control={control}
                            name="addressDetails.enterArea"
                            rules={{ required: "Enter Area is required" }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter Area"
                                />
                            )}
                        />
                        {errors.addressDetails?.enterArea && (
                            <p className="text-red-500 text-xs italic">
                                {errors.addressDetails.enterArea.message}
                            </p>
                        )}
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <Controller
                            control={control}
                            name="addressDetails.enterState"
                            rules={{ required: "Enter State is required" }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter State"
                                />
                            )}
                        />
                        {errors.addressDetails?.enterState && (
                            <p className="text-red-500 text-xs italic">
                                {errors.addressDetails.enterState.message}
                            </p>
                        )}
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <Controller
                            control={control}
                            name="addressDetails.enterCity"
                            rules={{ required: "Enter City is required" }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter City"
                                />
                            )}
                        />
                        {errors.addressDetails?.enterCity && (
                            <p className="text-red-500 text-xs italic">
                                {errors.addressDetails.enterCity.message}
                            </p>
                        )}
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <Controller
                            control={control}
                            name="addressDetails.postCode"
                            rules={{
                                required: "Post Code is required",
                                pattern: {
                                    value: /^\d+$/,
                                    message: "Please enter a valid numeric postal code",
                                },
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Post Code"
                                />
                            )}
                        />
                        {errors.addressDetails?.postCode && (
                            <p className="text-red-500 text-xs italic">
                                {errors.addressDetails.postCode.message}
                            </p>
                        )}
                    </div>
                </div>
                <button type="submit"></button>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-violet-600 hover:bg-violet-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Book Appointment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
