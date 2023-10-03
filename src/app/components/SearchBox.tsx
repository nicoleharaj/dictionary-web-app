"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

export type QueryResult = {
  meanings: Array<Meaning>;
  license: { name: string; url: string };
  phonetics: Array<Object>;
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

export default function SearchBox() {
  const router = useRouter();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);

      const query = formData.get("query") as string;
      router.replace(`/definition/${query}`);
      form.reset();
    }
  };

  return (
    <>
      <form className="relative w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full rounded-lg border-none bg-neutral-200 p-3 font-bold caret-purple outline-none placeholder:text-neutral-600/25 focus:ring-purple"
          placeholder="Search for any word..."
          id="query"
          name="query"
          onChange={handleChange}
          required
        />
        <div className="absolute bottom-0 right-5 top-0 my-auto h-[15.5px] w-[15.5px]">
          <Image src="/images/icon-search.svg" alt="Search icon" fill />
        </div>
      </form>
    </>
  );
}
