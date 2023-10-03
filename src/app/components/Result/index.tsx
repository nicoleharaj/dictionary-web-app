import Image from "next/image";
import Divider from "../Divider";
import { QueryResult } from "../SearchBox";
import Meaning from "./Meaning";

interface IResult {
  data: QueryResult;
}

export default function Result({ data }: IResult) {
  return (
    <section className="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-heading-lg font-bold">{data.word}</h1>

        {data.phonetic && (
          <p className="text-heading-md text-purple">/{data.phonetic}/</p>
        )}
      </div>

      {data.meanings.map((m, index) => {
        return <Meaning data={m} key={index} />;
      })}

      {data.sourceUrls && (
        <div>
          <Divider horizontal />
          <ul className="text-body-sm mt-[19px] flex flex-col gap-2">
            {data.sourceUrls.map((url, index) => (
              <li key={index} className="flex gap-5">
                <h4 className="border-b border-neutral-400 text-neutral-400">
                  Source
                </h4>
                <a
                  href={url}
                  className="flex gap-[9px] text-neutral-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="border-b border-neutral-600">{url}</span>
                  <Image
                    alt="External link icon"
                    src="/images/icon-new-window.svg"
                    width={12}
                    height={12}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
