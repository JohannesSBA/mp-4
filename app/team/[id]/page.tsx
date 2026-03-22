"use server";

import PlayerCard from "@/app/components/PlayerCard";
import { PlayerCardProps } from "@/app/components/PlayerCard";
import Link from "next/link";

type Player = PlayerCardProps["player"];

interface PageProps {
  params: {
    id: string;
  };
}

export default async function TeamPage({ params }: PageProps) {
  const { id } = await params;
  const res = await fetch(
    `https://v3.football.api-sports.io/players/squads?team=${id}`,
    {
      headers: {
        "x-apisports-key": process.env.API_KEY as string,
      },
    },
  );
  const data = await res.json();
  const players = data.response[0].players;

  return (
    <div>
      <div className="h-24 shadow-md rounded-md p-6 flex justify-between">
        <Link
          href="/"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2"
        >
          Back
        </Link>
        <h1 className="text-2xl font-bold text-center">
          {data.response[0].name} Squad Players
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((player: Player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}
