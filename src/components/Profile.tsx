export default function Profile() {
  return (
    <section id="profile" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            講師紹介
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Profile image placeholder */}
          <div className="flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-5xl text-white">
            もっ
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold text-primary">もっくん先生</h3>
            <p className="mb-4 text-sm font-medium text-accent">
              医学部専門予備校 英語科主任
            </p>
            <div className="space-y-3 text-sm leading-relaxed text-text-sub">
              <p>
                医学部専門予備校にて英語科主任を務め、多くの医学部合格者を輩出。英語科の講師チームをマネジメントしながら、カリキュラム設計から個別指導まで幅広く担当しています。
              </p>
              <p>
                大学受験英語のプロフェッショナルとして、英作文・和訳・文法・精読・リスニングなど、すべての分野で指導が可能。特に私立医学部の入試傾向を熟知しており、大学ごとの出題パターンに合わせた的確な添削・アドバイスを提供します。
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "英作文指導",
                "和訳添削",
                "医学部入試対策",
                "カリキュラム設計",
                "個別指導",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-bg-section px-4 py-1.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
