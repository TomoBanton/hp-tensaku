export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
          無料体験・お問い合わせ
        </h2>
        <p className="mb-10 text-text-sub">
          まずは無料体験からお気軽にどうぞ。
          <br />
          添削のクオリティを実感してからお申し込みいただけます。
        </p>
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-light p-10 text-white">
          <h3 className="mb-4 text-2xl font-bold">
            初回添削を無料で体験できます
          </h3>
          <p className="mb-8 opacity-90">
            英作文または和訳の答案を1問お送りください。
            <br />
            プロ講師が通常と同じクオリティで添削いたします。
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-accent-light hover:shadow-xl sm:w-auto"
            >
              無料体験に申し込む
            </a>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 text-sm opacity-80 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex items-center gap-2">
              <span>&#9993;</span>
              <span>メールでもお問い合わせ可能</span>
            </div>
            <div className="flex items-center gap-2">
              <span>&#128172;</span>
              <span>LINEでのご相談も受付中</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
