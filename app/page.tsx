"use client";

import { useState } from "react";
// import { marked } from "marked";

// interface ApiResponse {
//   content: string;
// }

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: message }],
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await res.json();

      setResponse(data.content);
    } catch (error) {
      setResponse("Error: Unable to get a response");
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  };

  return (
    <main className='min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12 text-white'>
      <h1 className='text-4xl font-bold text-center text-gray-100 mb-2'>
        Chat with me
      </h1>
      <p className='text-center mb-5'>Get answers</p>
      <section className='max-w-3xl mx-auto w-full'>
        <div className='bg-gray-800 shadow-lg rounded px-8 pt-6 pb-8 mb-4'>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Enter your message'
              className='px-3 py-2 bg-gray-700 text-white rounded'
            />
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
              disabled={!message.trim() || isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
          {isLoading && (
            <div className='flex justify-center mt-4'>
              <span className='animate-pulse text-2xl text-white'>
                Loading...
              </span>
            </div>
          )}

          {response && !isLoading && (
            <div className='mt-4 p-3 bg-gray-700 text-white rounded animate-fade-in'>
              <p>{response}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
