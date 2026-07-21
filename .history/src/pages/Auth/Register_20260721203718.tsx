import { Link } from "react-router";
import { useForm } from "react-hook-form";

type RegisterFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<RegisterFormData>();

    const onSubmit = (data: RegisterFormData) => {
        console.log(data);
    };

    return (
        <main className="mx-auto max-w-md px-6 py-16">
            <h1 className="text-3xl font-bold">Create your account</h1>

            <p className="mt-2 text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
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
                    className="w-full rounded-md bg-black py-3 text-white transition hover:bg-gray-800"
                >
                    Create Account
                </button>
            </form>
        </main>
    );
}