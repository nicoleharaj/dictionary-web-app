import Link from "next/link";
import Divider from "../Divider";
import { Meaning } from "../SearchBox";

interface IMeaning {
  data: Meaning;
}

export default function Meaning({ data }: IMeaning) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-5">
        <h2 className="text-heading-md font-bold italic">
          {data.partOfSpeech}
        </h2>
        <Divider horizontal />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-heading-sm text-neutral-400">Meaning</h3>
        <ul className="ml-[40px] flex list-disc flex-col gap-3 text-lg marker:text-purple">
          {data.definitions.map((d, index) => {
            return (
              <li key={index}>
                {d.definition}
                {d.example && (
                  <p className="mt-[13px] text-neutral-400">
                    &ldquo;{d.example}&rdquo;
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {data.synonyms.length > 0 && (
        <div className="flex items-center gap-[22px]">
          <h3 className="text-heading-sm text-neutral-400">Synonyms</h3>
          <ul className="flex flex-wrap gap-2 text-heading-sm font-bold text-purple">
            {data.synonyms.map((s, index) => (
              <li key={index}>
                <Link
                  href={`/definition/${s}`}
                  replace
                  className="border-purple hover:border-b"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
