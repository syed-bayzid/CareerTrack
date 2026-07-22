import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

import useAuth from "@/hooks/useAuth";

type RegisterFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export default function Register() {
    const { createUser } = useAuth();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<RegisterFormData>();

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);

        try {
            await createUser(data.email, data.password);

            toast.success("Account created successfully!");

            reset();

            navigate("/");
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error("Registration failed!");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="mx-auto max-w-md px-6 py-16">
            <h1 className="text-3xl font-bold">
                Create your account
            </h1>

            <p className="mt-2 text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-blue-600 hover:underline"
                >
                    Log in
                </Link>
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
            >
                {/* Name */}
                <div>
                    <label className="mb-2 block font-medium">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="John Doe"
                        {...register("name", {
                            required: "Name is required",
                        })}
                        className="w-full rounded-md border px-4 py-2"
                    />

                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="john@gmail.com"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email",
                            },
                        })}
                        className="w-full rounded-md border px-4 py-2"
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label className="mb-2 block font-medium">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="********"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Minimum 8 characters",
                            },
                        })}
                        className="w-full rounded-md border px-4 py-2"
                    />

                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="mb-2 block font-medium">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        placeholder="********"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                                value === watch("password") ||
                                "Passwords do not match",
                        })}
                        className="w-full rounded-md border px-4 py-2"
                    />

                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-full items-center justify-center rounded-md bg-black py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {isLoading ? (
                        <>
                            <svg
                                className="mr-2 h-5 w-5 animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />

                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V4a8 8 0 00-8 8z"
                                />
                            </svg>

                            Creating Account...
                        </>
                    ) : (
                        "Create Account"
                    )}
                </button>
            </form>
        </main>
    );
}