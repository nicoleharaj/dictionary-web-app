"use client";

import Result from "@/app/components/Result";
import { useEffect, useState, useCallback } from "react";

type Error = {
  title: string;
  message: string;
  resolution: string;
};

export default function Page({ params }: { params: { word: string } }) {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const handleFetch = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${params.word}`,
      );
      const data = await response.json();

      if (response.ok) {
        setResult(data[0]);
        setIsLoading(false);
      } else if (response.status === 404) {
        setError(data);
        setIsLoading(false);
        return;
      }
    } catch (e) {
      console.error(e);
    }
  }, [params.word]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <>
      {result && !isLoading && <Result data={result} />}
      {error && !isLoading && (
        <section className="mt-[132px] flex w-full flex-col items-center justify-center text-center">
          <div className="mb-11 text-heading-lg">😕</div>
          <h1 className="mb-6 font-bold">{error.title}</h1>
          <p className="text-neutral-400">
            {error.message} {error.resolution}
          </p>
        </section>
      )}
    </>
  );
}
