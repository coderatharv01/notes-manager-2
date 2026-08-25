"use client"
import Link from "next/link";
import { useCards } from "./context/CardContext";

export default function Home() {
  const { cards } = useCards();
  return (
    <div>
      <h1 className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black mt-10">
        NOTES MANAGER
      </h1>
      <div className="w-50 h-70 border-2">
        <div className="flex flex-col items-center justify-top mt-10 ">
          <Link href="/create_card">
            <button className="abg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              Create.
            </button>
          </Link>
        </div>
      </div>
      <div className="w-50 h-70 border-2">
        <div className="flex flex-col items-center justify-top mt-10 ">
          {cards.map(( card ) => (
            <div key={card.id}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
          <Link href={`/view_card/${cards.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
