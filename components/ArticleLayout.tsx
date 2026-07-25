import Link from "next/link";

export default function ArticleLayout({
  category,
  title,
  dek,
  readTime,
  children,
}: {
  category: string;
  title: string;
  dek: string;
  readTime: string;
  children: React.ReactNode;
}) {
  return (
    <article className="bg-charcoal">
      <header className="pt-44 pb-14 md:pt-52 md:pb-16 bg-gunmetal border-b border-white/10">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Link
            href="/resources"
            className="font-utility text-xs tracking-widest uppercase text-steel-silver-dim hover:text-arc-blue-bright transition-colors"
          >
            &larr; Resource Center
          </Link>
          <p className="font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mt-6 mb-4">
            {category} · {readTime}
          </p>
          <h1 className="font-display font-bold uppercase text-3xl md:text-5xl plate-heading leading-[1.05] mb-5">
            {title}
          </h1>
          <p className="text-lg text-steel-silver leading-relaxed">{dek}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 md:px-10 py-16 md:py-20 prose-article">
        {children}
      </div>
    </article>
  );
}
