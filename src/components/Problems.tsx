const problems = [
  {
    icon: "📝",
    text: "英作文や和訳の自己採点ができず、何が間違っているかわからない",
  },
  {
    icon: "🏥",
    text: "医学部入試に特化した添削をしてくれるサービスが見つからない",
  },
  {
    icon: "💰",
    text: "予備校は高額すぎるが、質の高い添削指導を受けたい",
  },
  {
    icon: "📱",
    text: "地方在住でも、レベルの高い英語指導を受けたい",
  },
];

export default function Problems() {
  return (
    <section className="bg-bg-section px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
          こんなお悩みありませんか？
        </h2>
        <p className="mb-12 text-text-sub">
          医学部受験の英語対策、一人で悩んでいませんか？
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl bg-white p-6 text-left shadow-sm"
            >
              <span className="text-3xl">{problem.icon}</span>
              <p className="text-base font-medium leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
