const steps = [
  {
    step: "01",
    title: "お問い合わせ・無料体験",
    description: "フォームからお問い合わせください。無料体験添削で実際のサービスをお試しいただけます。",
  },
  {
    step: "02",
    title: "答案を提出",
    description: "写真やPDFで答案を提出。LINEやメールなど、お好きな方法でお送りいただけます。",
  },
  {
    step: "03",
    title: "プロ講師が添削",
    description: "医学部入試を知り尽くした講師が、文法・語彙・表現の観点から丁寧に添削。模範解答も作成します。",
  },
  {
    step: "04",
    title: "添削結果を返却",
    description: "詳細なフィードバック付きの添削結果をお返しします。弱点分析と改善ポイントも明記します。",
  },
  {
    step: "05",
    title: "フォローアップ",
    description: "添削内容に関する質問にもお答えします。継続的な添削で着実に実力を伸ばしましょう。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="bg-bg-section px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            ご利用の流れ
          </h2>
          <p className="text-text-sub">シンプルな5ステップで始められます</p>
        </div>
        <div className="space-y-8">
          {steps.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {item.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-full w-0.5 bg-accent/20" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-sub">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
