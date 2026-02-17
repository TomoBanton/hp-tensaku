export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-gradient-to-br from-primary to-primary-light px-4 pt-16">
      <div className="mx-auto max-w-6xl text-center text-white">
        <p className="mb-4 text-sm font-medium tracking-widest uppercase opacity-80">
          医学部専門予備校 英語科主任が直接指導
        </p>
        <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
          医学部合格のための
          <br />
          <span className="text-accent-light">英語添削サービス</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl">
          英作文・和訳の添削から英語全般の個別指導まで。
          <br className="hidden md:block" />
          医学部入試を知り尽くしたプロ講師が、あなたの合格を全力でサポートします。
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-accent-light hover:shadow-xl sm:w-auto"
          >
            無料体験を申し込む
          </a>
          <a
            href="#features"
            className="w-full rounded-full border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
          >
            サービスを詳しく見る
          </a>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <span className="text-2xl">&#10003;</span>
            <span>オンライン対応</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">&#10003;</span>
            <span>対面指導も可能</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">&#10003;</span>
            <span>初回無料体験</span>
          </div>
        </div>
      </div>
    </section>
  );
}
