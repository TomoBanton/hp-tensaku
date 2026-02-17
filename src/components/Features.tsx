const features = [
  {
    icon: "🎯",
    title: "医学部入試に特化",
    description:
      "私立医学部の出題傾向を熟知した講師陣が、大学ごとの特徴を踏まえた添削・指導を行います。一般的な添削サービスでは得られない、合格に直結するフィードバックを提供します。",
  },
  {
    icon: "👨‍🏫",
    title: "プロ講師が直接指導",
    description:
      "医学部専門予備校の英語科主任が自ら添削。英作文・和訳・文法・読解まで、受験英語のすべてをカバー。AI添削では得られない、経験に基づいた的確なアドバイスをお届けします。",
  },
  {
    icon: "🌐",
    title: "オンライン＋対面対応",
    description:
      "写真やPDFで答案を提出するだけ。全国どこからでもオンラインで受講できます。対面での個別指導も可能。あなたのスタイルに合わせた柔軟な受講形式です。",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            選ばれる3つの理由
          </h2>
          <p className="text-text-sub">
            大手予備校のクオリティを、手頃な価格で
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-100 p-8 text-center shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-6 text-5xl">{feature.icon}</div>
              <h3 className="mb-4 text-xl font-bold text-primary">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-sub">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
