"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

export type QueryResult = {
  meanings: Array<Meaning>;
  license: { name: string; url: string };
  phonetics: Array<Phonetic>;
  phonetic: string;
  sourceUrls: Array<string>;
  word: string;
};

export type Meaning = {
  antonyms: Array<string>;
  definitions: Array<Definition>;
  partOfSpeech: string;
  synonyms: Array<string>;
};

type Definition = {
  antonyms: Array<string>;
  definition: string;
  synonyms: Array<string>;
  example: string;
};

type Phonetic = {
  text: string;
  audio: string;
};

export default function SearchBox() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);

      const query = formData.get("query") as string;

      if (query === "" || query === null) {
        setSubmitError(true);
        return;
      }
      setSubmitError(false);
      router.replace(`/definition/${query}`);
      form.reset();
    }
  };

  return (
    <>
      <form className="relative w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`w-full rounded-lg border-none bg-neutral-200 p-3 text-[16px] font-bold caret-purple outline-none placeholder:text-neutral-600/25 ${
            submitError ? "ring-red focus:ring-red ring-1" : "focus:ring-purple"
          } dark:bg-neutral-600 dark:placeholder:text-white/25 md:text-heading-sm`}
          placeholder="Search for any word..."
          id="query"
          name="query"
          onChange={handleChange}
        />
        <div className="absolute bottom-0 right-5 top-0 my-auto h-[15.5px] w-[15.5px]">
          <Image src="/images/icon-search.svg" alt="Search icon" fill />
        </div>
        {submitError && (
          <p className="absolute mt-1 text-[16px] text-red md:mt-2 md:text-heading-sm">
            Whoops, can&apos;t be empty...
          </p>
        )}
      </form>
    </>
  );
}
