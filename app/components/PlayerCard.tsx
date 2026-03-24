import Image from "next/image";

export interface player {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

export default function PlayerCard(player: player) {
  return (
    <div className="flex gap-4 shadow-md rounded-md p-6">
      <Image
        src={player.photo}
        alt={player.name}
        width={100}
        height={100}
        className="rounded-full shadow-md"
      />
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">{player.name}</h1>
        <p>
          Age: <span className="font-bold">{player.age}</span>
        </p>
        <p>
          Number: <span className="font-bold">{player.number}</span>
        </p>
        <p>
          Position: <span className="font-bold">{player.position}</span>
        </p>
      </div>
    </div>
  );
}
