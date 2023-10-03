interface IDivider {
  horizontal?: boolean;
}

export default function Divider({ horizontal }: IDivider) {
  return (
    <>
      {horizontal ? (
        <div className="h-[1px] w-full bg-neutral-300"></div>
      ) : (
        <div className="h-full w-[1px] bg-neutral-300"></div>
      )}
    </>
  );
}
