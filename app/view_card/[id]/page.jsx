"use client"
import { useCards} from "../../context/CardContext";
import { useParams } from "next/navigation";

export default function ViewCard(){
    const {cards} = useCards();
    const params = useParams();

    const card = cards.find(
        (card)=> card.id.toString() === params.id
    )

    if(!card){
        return <div>Card not found</div>
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">{card.title}</h1>
            <p className="text-lg">{card.description}</p>
        </div>
    )
}