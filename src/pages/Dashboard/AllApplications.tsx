import { Link } from "react-router";
import { useMemo, useState } from "react";

type Application = {
    id: number;
    company: string;
    role: string;
    source: string;
    status: string;
    appliedDate: string;
};

const demoApplications: Application[] = [
    {
        id: 1,
        company: "Google",
        role: "Frontend Developer",
        source: "LinkedIn",
        status: "Interview",
        appliedDate: "2026-07-18",
    },
    {
        id: 2,
        company: "Microsoft",
        role: "React Developer",
        source: "Indeed",
        status: "Applied",
        appliedDate: "2026-07-16",
    },
    {
        id: 3,
        company: "Spotify",
        role: "Full Stack Developer",
        source: "Company Website",
        status: "Assessment",
        appliedDate: "2026-07-14",
    },
    {
        id: 4,
        company: "Amazon",
        role: "Software Engineer",
        source: "LinkedIn",
        status: "Rejected",
        appliedDate: "2026-07-12",
    },
    {
        id: 5,
        company: "Meta",
        role: "Frontend Engineer",
        source: "Referral",
        status: "Offer",
        appliedDate: "2026-07-10",
    },
];

export default function AllApplications() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");

    const filteredApplications = useMemo(() => {
        return demoApplications.filter((app) => {
            const matchSearch =
                app.company.toLowerCase().includes(search.toLowerCase()) ||
                app.role.toLowerCase().includes(search.toLowerCase());

            const matchStatus =
                status === "" || app.status === status;

            return matchSearch && matchStatus;
        });
    }, [search, status]);

    return (
        <main className="mx-auto max-w-7xl px-6 py-10">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>
                    <h1 className="text-3xl font-bold">
                        My Applications
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Manage every job you've applied for.
                    </p>
                </div>

                <Link
                    to="/dashboard/applications/new"
                    className="rounded-lg bg-slate-900 px-6 py-3 text-white hover:bg-slate-800"
                >
                    + Add Application
                </Link>

            </div>

            {/* Filters */}

            <div className="mt-8 flex flex-col gap-4 md:flex-row">

                <input
                    type="text"
                    placeholder="Search company or role..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 rounded-lg border px-4 py-3"
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="rounded-lg border px-4 py-3"
                >
                    <option value="">All Status</option>
                    <option>Saved</option>
                    <option>Applied</option>
                    <option>Assessment</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                    <option>Offer</option>
                </select>

            </div>

            {/* Table */}

            <div className="mt-8 overflow-x-auto rounded-xl border bg-white">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="px-5 py-4 text-left">Company</th>
                            <th className="px-5 py-4 text-left">Role</th>
                            <th className="px-5 py-4 text-left">Source</th>
                            <th className="px-5 py-4 text-left">Status</th>
                            <th className="px-5 py-4 text-left">Applied</th>
                            <th className="px-5 py-4 text-center">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredApplications.map((app) => (

                            <tr
                                key={app.id}
                                className="border-t hover:bg-slate-50"
                            >

                                <td className="px-5 py-4">
                                    {app.company}
                                </td>

                                <td className="px-5 py-4">
                                    {app.role}
                                </td>

                                <td className="px-5 py-4">
                                    {app.source}
                                </td>

                                <td className="px-5 py-4">

                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                                        {app.status}
                                    </span>

                                </td>

                                <td className="px-5 py-4">
                                    {app.appliedDate}
                                </td>

                                <td className="px-5 py-4">

                                    <div className="flex justify-center gap-3">

                                        <Link
                                            to={`/dashboard/applications/${app.id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            View
                                        </Link>

                                        <Link
                                            to={`/dashboard/applications/${app.id}/edit`}
                                            className="text-green-600 hover:underline"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </main>
    );
}