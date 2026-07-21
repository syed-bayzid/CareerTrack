import { Link } from "react-router";

export default function Home() {
    return (
        <section className="mx-auto flex min-h-[80vh] max-w-7xl items-center justify-between gap-16 px-6 py-20">

            {/* Left */}
            <div className="max-w-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-emerald-700">
                    Your Job Search, In One Place
                </p>

                <h1 className="mb-6 text-6xl font-bold leading-tight text-slate-900">
                    Stop losing track of where you applied.
                </h1>

                <p className="mb-10 text-lg leading-8 text-slate-600">
                    CareerTrack Lite helps you organize every job application,
                    monitor progress, and stay prepared for interviews.
                </p>

                <div className="flex gap-4">
                    <Link
                        to="/register"
                        className="rounded-lg bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700"
                    >
                        Create your account
                    </Link>

                    <Link
                        to="/login"
                        className="rounded-lg border px-6 py-3 transition hover:bg-gray-100"
                    >
                        I already have one
                    </Link>
                </div>
            </div>

            {/* Right Card */}
            <div className="w-full max-w-lg rounded-2xl border bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-slate-400">
                    Every Application Moves Through Six Stages
                </h3>

                <div className="mb-8 flex flex-wrap gap-3">
                    <span className="rounded-full bg-gray-100 px-4 py-2">Saved</span>

                    <span className="rounded-full bg-blue-100 px-4 py-2">
                        Applied
                    </span>

                    <span className="rounded-full bg-yellow-100 px-4 py-2">
                        Assessment
                    </span>

                    <span className="rounded-full bg-green-100 px-4 py-2">
                        Interview
                    </span>

                    <span className="rounded-full bg-red-100 px-4 py-2">
                        Rejected
                    </span>

                    <span className="rounded-full bg-emerald-700 px-4 py-2 text-white">
                        Offer
                    </span>
                </div>

                <p className="text-slate-500">
                    Filter, search and manage all your job applications in one
                    place.
                </p>
            </div>
        </section>
    );
}