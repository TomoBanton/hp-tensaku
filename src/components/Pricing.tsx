const plans = [
  {
    name: "英作文添削ライト",
    price: "9,800",
    unit: "月額（税込）",
    description: "まずは気軽に添削を始めたい方に",
    features: [
      "月4回の添削（英作文or和訳）",
      "文法・語彙・表現の3段階フィードバック",
      "模範解答の提示",
      "メールでの質問対応",
    ],
    highlighted: false,
  },
  {
    name: "志望校別パック",
    price: "39,800",
    unit: "1パック（税込）",
    description: "志望校に特化した対策がしたい方に",
    features: [
      "志望校の過去問5年分添削",
      "出題傾向分析レポート",
      "オリジナル予想問題3回分",
      "学習方針アドバイス",
      "動画解説付き",
    ],
    highlighted: true,
  },
  {
    name: "総合指導コース",
    price: "49,800",
    unit: "月額（税込）",
    description: "英語力を総合的に伸ばしたい方に",
    features: [
      "月8回の添削（英作文・和訳）",
      "月1回のオンライン個別指導（30分）",
      "LINEで質問し放題",
      "学習計画の作成・管理",
      "弱点分析レポート",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            料金プラン
          </h2>
          <p className="text-text-sub">
            すべてのプランで初回無料体験が可能です
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl p-8 transition-all hover:shadow-lg ${
                plan.highlighted
                  ? "border-2 border-accent bg-white shadow-lg"
                  : "border border-gray-100 bg-white shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                  おすすめ
                </span>
              )}
              <h3 className="mb-2 text-lg font-bold text-primary">
                {plan.name}
              </h3>
              <p className="mb-4 text-sm text-text-sub">{plan.description}</p>
              <div className="mb-6">
                <span className="text-lg text-text-sub">&#165;</span>
                <span className="text-4xl font-black text-primary">
                  {plan.price}
                </span>
                <span className="ml-2 text-sm text-text-sub">{plan.unit}</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-accent">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block rounded-full py-3 text-center text-sm font-bold transition-all ${
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent-light"
                    : "border-2 border-accent text-accent hover:bg-accent hover:text-white"
                }`}
              >
                無料体験を申し込む
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-text-sub">
          ※ 料金は予告なく変更する場合があります。詳細はお問い合わせください。
        </p>
      </div>
    </section>
  );
}
