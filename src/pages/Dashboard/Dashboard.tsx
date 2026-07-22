import useAuth from "@/hooks/useAuth";
import { Link } from "react-router";

const stats = [
    {
        label: "Total Applications",
        value: 18,
        color: "text-slate-900",
    },
    {
        label: "Saved",
        value: 4,
        color: "text-gray-500",
    },
    {
        label: "Applied",
        value: 7,
        color: "text-blue-600",
    },
    {
        label: "Assessment",
        value: 2,
        color: "text-amber-500",
    },
    {
        label: "Interview",
        value: 3,
        color: "text-green-600",
    },
    {
        label: "Rejected",
        value: 1,
        color: "text-red-500",
    },
    {
        label: "Offer",
        value: 1,
        color: "text-emerald-600",
    },
];

const recentApplications = [
    {
        id: 1,
        company: "Google",
        role: "Frontend Developer",
        status: "Interview",
        date: "18 Jul 2026",
    },
    {
        id: 2,
        company: "Microsoft",
        role: "React Developer",
        status: "Applied",
        date: "17 Jul 2026",
    },
    {
        id: 3,
        company: "Amazon",
        role: "Software Engineer",
        status: "Assessment",
        date: "15 Jul 2026",
    },
    {
        id: 4,
        company: "Spotify",
        role: "Full Stack Developer",
        status: "Saved",
        date: "13 Jul 2026",
    },
];

export default function Dashboard() {
    const { user } = useAuth();

    return (
        <main className="mx-auto max-w-7xl px-6 py-10">

            {/* Header */}

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>
                    <h1 className="text-3xl font-bold">
                        Welcome,
                        {" "}
                        {user?.displayName || "Developer"} 👋
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Here's an overview of your job applications.
                    </p>
                </div>

                <Link
                    to="/dashboard/applications/new"
                    className="rounded-lg bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800"
                >
                    + Add Application
                </Link>

            </div>

            {/* Stats */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">

                {stats.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-xl border bg-white p-5 shadow-sm"
                    >
                        <p className="text-sm text-slate-500">
                            {item.label}
                        </p>

                        <h2
                            className={`mt-3 text-3xl font-bold ${item.color}`}
                        >
                            {item.value}
                        </h2>
                    </div>
                ))}

            </div>

            {/* Recent */}

            <div className="mt-12 rounded-xl border bg-white shadow-sm">

                <div className="flex items-center justify-between border-b p-5">

                    <h2 className="text-xl font-semibold">
                        Recent Applications
                    </h2>

                    <Link
                        to="/dashboard/applications"
                        className="text-blue-600 hover:underline"
                    >
                        View All
                    </Link>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-slate-50">

                            <tr className="text-left">

                                <th className="px-6 py-4">Company</th>
                                <th className="px-6 py-4">Position</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Applied</th>

                            </tr>

                        </thead>

                        <tbody>

                            {recentApplications.map((application) => (

                                <tr
                                    key={application.id}
                                    className="border-t hover:bg-slate-50"
                                >
                                    <td className="px-6 py-4">
                                        {application.company}
                                    </td>

                                    <td className="px-6 py-4">
                                        {application.role}
                                    </td>

                                    <td className="px-6 py-4">

                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                                            {application.status}
                                        </span>

                                    </td>

                                    <td className="px-6 py-4">
                                        {application.date}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </main>
    );
}