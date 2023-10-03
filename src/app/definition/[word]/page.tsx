"use client";

import Result from "@/app/components/Result";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { word: string } }) {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${params.word}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data[0]);
        setIsLoading(false);
      });
  }, [setResult, params.word]);
  return (
    <>
      {result && !isLoading && <Result data={result} />}
      {!result && !isLoading && (
        <section className="mt-[132px] flex w-full flex-col items-center justify-center text-center">
          <div className="text-heading-lg mb-11">😕</div>
          <h1 className="mb-6 font-bold">No Definitions Found</h1>
          <p className="text-neutral-400">
            Sorry pal, we couldn&apos;t find definitions for the word you were
            looking for. You can try searching again at a later time or head to
            the web instead.
          </p>
        </section>
      )}
    </>
  );
}
