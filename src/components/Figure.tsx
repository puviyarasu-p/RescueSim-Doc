import Image from "next/image";
import { getImageSize } from "@/lib/image-sizes";

export function Figure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  const size = getImageSize(src);
  const w = width ?? size.width;
  const h = height ?? size.height;

  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-lg border border-border bg-surface-alt">
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          className="mx-auto h-auto w-auto max-w-full"
          sizes="(max-width: 768px) 100vw, 760px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-[13px] text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}

export function FigureRow({ children }: { children: React.ReactNode }) {
  return <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>;
}
