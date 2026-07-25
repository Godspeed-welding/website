import Image from "next/image";

export default function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative pt-44 pb-16 md:pt-52 md:pb-20 bg-gunmetal border-b border-white/10 overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt || ""}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gunmetal via-gunmetal/85 to-gunmetal/40" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display font-bold uppercase text-4xl md:text-6xl plate-heading leading-[0.97] max-w-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-lg text-steel-silver max-w-2xl leading-relaxed">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
