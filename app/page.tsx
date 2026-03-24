"use server";

import GridList from "./components/GridList";

export default async function Home() {
  const res = await fetch(
    "https://v3.football.api-sports.io/teams?league=39&season=2024",
    {
      headers: {
        "x-apisports-key": process.env.API_KEY as string,
      },
    },
  );
  const data = await res.json();

  console.log("API_KEY", process.env.API_KEY);

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base/7 font-semibold text-green-600 dark:text-green-400">
          Where are the 2024 teams now?
        </p>
        <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
          The 2024 Premier League Teams
        </h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
          These are the teams that played in the 2024 Premier League season.
          Click on a team to see what they are up to now.
        </p>
      </div>
      <GridList data={data.response} />
    </div>
  );
}
