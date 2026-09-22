import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 items-center rounded-lg bg-brand-dark px-2.5 py-1.5">
        <Image
          src="/images/brand/rescuesim-logo.png"
          alt="RescueSim"
          width={1977}
          height={392}
          priority
          className="h-4 w-auto"
        />
      </span>
      <span className="hidden text-[15px] font-medium text-muted sm:inline">
        Documentation
      </span>
    </div>
  );
}
