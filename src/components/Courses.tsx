const courses = [
  {
    icon: "📝",
    title: "英作文添削コース",
    description: "英作文・和訳の添削に特化したコース。答案を提出するだけで、詳細なフィードバックと模範解答をお返しします。",
    features: ["英作文・和訳の丁寧な添削", "文法・語彙・表現の3段階フィードバック", "模範解答＋別解の提示", "弱点分析レポート"],
    badge: "人気",
  },
  {
    icon: "🏫",
    title: "志望校別対策パック",
    description: "志望する医学部の過去問を徹底分析。出題傾向に合わせたオリジナル問題と添削で、志望校合格に最短距離で近づきます。",
    features: ["過去問5年分の添削", "出題傾向分析レポート", "オリジナル予想問題3回分", "学習方針アドバイス"],
    badge: "おすすめ",
  },
  {
    icon: "🎓",
    title: "総合指導コース",
    description: "添削に加えて月1回のオンライン個別指導と質問対応がセットに。英語力を総合的に伸ばしたい方に最適です。",
    features: ["月8回の添削（英作文・和訳）", "月1回のオンライン個別指導（30分）", "LINEで質問し放題", "学習計画の作成・管理"],
    badge: null,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-bg-section px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            コース一覧
          </h2>
          <p className="text-text-sub">
            あなたの目的に合わせて選べる3つのコース
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              {course.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                  {course.badge}
                </span>
              )}
              <div className="mb-4 text-4xl">{course.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-primary">
                {course.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-text-sub">
                {course.description}
              </p>
              <ul className="mb-6 flex-1 space-y-2">
                {course.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-accent">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block rounded-full border-2 border-accent py-3 text-center text-sm font-bold text-accent transition-all hover:bg-accent hover:text-white"
              >
                詳しく相談する
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
