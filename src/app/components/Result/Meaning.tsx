import Link from "next/link";
import Divider from "../Divider";
import { Meaning } from "../SearchBox";

interface IMeaning {
  data: Meaning;
}

export default function Meaning({ data }: IMeaning) {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex items-center gap-5">
        <h2 className="text-[18px] font-bold italic md:text-heading-md">
          {data.partOfSpeech}
        </h2>
        <Divider horizontal />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-[16px] text-neutral-400 md:text-heading-sm">
          Meaning
        </h3>
        <ul className="ml-[40px] flex list-disc flex-col gap-3 text-[15px] marker:text-purple md:text-lg">
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
          <h3 className="text-[16px] text-neutral-400 md:text-heading-sm">
            Synonyms
          </h3>
          <ul className="flex flex-wrap gap-2 text-[16px] font-bold text-purple md:text-heading-sm">
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
