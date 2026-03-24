import Image from "next/image";
import Link from "next/link";
interface gridListProps {
  team: {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
}

export default function GridList({ data }: { data: gridListProps[] }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {data.map((team) => (
        <Link href={`/team/${team.team.id}`} key={team.team.id}>
          <li className="col-span-1 shadow-md rounded-md p-6">
            <div className="flex w-full items-center gap-4">
              <Image
                alt={team.team.name}
                width={100}
                height={100}
                src={team.team.logo}
                className="size-10 shrink-0 rounded-full bg-gray-300 outline  dark:bg-gray-700 dark:outline-white/10"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex items-center ">
                  <h3 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {team.team.name}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {team.team.founded}
                </p>
              </div>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200 dark:divide-white/10">
                <div className="flex w-0 flex-1">
                  <p className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-white">
                    {team.venue.name}
                  </p>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 dark:text-white">
                    {team.venue.address}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
