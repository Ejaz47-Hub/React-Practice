import { X } from "lucide-react";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [input, setinput] = useState("");
  const [Task, setTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    setText("");
    setinput("");
    const ItmTask = [...Task];
    ItmTask.push({ text, input });
    setTask(ItmTask);
  };

  const DeleteNote = (idx) => {
    const copyTask = [...Task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Add Notes Section */}
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col gap-5"
        >
          <h2 className="text-4xl font-extrabold tracking-tight">Add Notes</h2>

          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            type="text"
            placeholder="Enter Notes Heading"
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all"
          />

          <textarea
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
            }}
            placeholder="Write Details"
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all h-44 resize-none"
          />

          <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 active:scale-95 transition-all">
            Add Note
          </button>
        </form>

        {/* Recent Notes Section */}
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Recent Notes
          </h2>

          {Task.length === 0 ? (
            <div className="flex items-center justify-center h-44 border border-dashed border-zinc-700 rounded-xl">
              <p className="text-zinc-500 text-sm">No notes yet. Add one!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {Task.map((itm, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative bg-white text-black rounded-2xl p-4 min-h-44 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="flex flex-col gap-1 pr-6">
                      <h3 className="font-bold text-base leading-snug break-words">
                        {itm.text}
                      </h3>
                      <p className="text-sm text-zinc-500 break-words">
                        {itm.input}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        DeleteNote(idx);
                      }}
                      className="absolute top-3 right-3 bg-zinc-100 hover:bg-red-100 text-zinc-400 hover:text-red-500 rounded-lg p-1 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
