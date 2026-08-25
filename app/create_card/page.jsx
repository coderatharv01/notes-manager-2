"use client"
import { useState } from 'react'
import { useCards } from '../context/CardContext';

export default function CreateCard() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { addCard } = useCards();

    function handleCreate() {
        if (title.trim() === "" || description.trim() === "") {
            return;
        }

        addCard(title, description);
        setTitle("");
        setDescription("");


    }
    return (
        <div>
            <div className='min-h-screen p-10 '>
                <div className="flex justify-center p-8 text-2xl">
                    Create Card
                </div>
                <div className="flex flex-col items-center">
                    <input 
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 mb-4 w-64"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <textarea
                        type="text"
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 mb-4 w-64"
                    />
                </div>
                <div className="flex justify-center">
                    <button onClick={handleCreate} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Create Card
                    </button>
                </div>
            </div>
        </div >
    )
}
