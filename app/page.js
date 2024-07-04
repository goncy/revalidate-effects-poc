'use client'

import { useEffect, useState } from "react";

import { revalidate } from "./actions";

export default function Home() {
  const [date, setDate] = useState()

  useEffect(() => {
    setDate(() => new Date())
  }, [])

  if (!date) return (<p>Loading...</p>)

  return (
    <div>
      <p>{+date}</p>
      <form action={revalidate}>
        <button type="submit">Revalidate</button>
      </form>
    </div>
  );
}
