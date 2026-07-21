import { Link } from "react-router";

const stages = [
  "Saved",
  "Applied",
  "Assessment",D
  "Interview",
  "Rejected",
  "Offer",
];

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">
      {/* Left */}
      <div className="flex-1">
        <p className="mb-5 uppercase tracking-[4px] text-emerald-700">
          YOUR JOB SEARCH, IN ONE PLACE
        </p>

        <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
          Stop losing track of where you applied.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-slate-600">
          CareerTrack Lite is a personal ledger for every application you send —
          company, role, source and stage, kept private to your account and
          searchable in seconds.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/register"
            className="rounded-lg bg-slate-900 px-8 py-4 text-white hover:bg-slate-800"
          >
            Create your account
          </Link>

          <Link
            to="/login"
            className="rounded-lg border px-8 py-4 hover:bg-gray-100"
          >
            I already have one
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="w-full max-w-xl rounded-2xl border bg-white p-8 shadow-sm">
        <p className="mb-6 uppercase tracking-[3px] text-gray-500">
          Every application moves through six stages
        </p>

        <div className="mb-8 flex flex-wrap gap-3">
          {stages.map((stage) => (
            <span
              key={stage}
              className="rounded-full bg-gray-100 px-5 py-2"
            >
              {stage}
            </span>
          ))}
        </div>

        <p className="text-gray-600">
          Filter, search and sort your own applications only — no one else can
          see them.
        </p>
      </div>
    </section>
  );
}