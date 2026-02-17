"use client";

import { useState } from "react";

const faqs = [
  {
    question: "医学部以外の受験生でも受講できますか？",
    answer:
      "はい、大学受験の英語全般に対応しています。医学部入試が得意分野ですが、難関大・国公立大の英語対策にも十分ご活用いただけます。",
  },
  {
    question: "添削の返却にはどのくらい時間がかかりますか？",
    answer:
      "通常3〜5営業日以内に返却いたします。提出が集中する時期は多少お時間をいただく場合がありますが、可能な限り迅速に対応いたします。",
  },
  {
    question: "オンラインでの受講方法を教えてください。",
    answer:
      "答案を写真やPDFにしてLINEまたはメールでお送りいただくだけです。添削結果も同じ方法でお返しします。個別指導はZoomで行います。",
  },
  {
    question: "途中でコースを変更できますか？",
    answer:
      "はい、いつでも変更可能です。学習の進捗に合わせて、最適なコースをご提案いたします。まずはお気軽にご相談ください。",
  },
  {
    question: "無料体験ではどのような内容が受けられますか？",
    answer:
      "実際の添削を1回無料で体験いただけます。英作文または和訳の答案を1問お送りいただき、通常と同じクオリティの添削をお返しします。サービスの質を実感してからお申し込みいただけます。",
  },
  {
    question: "対面指導はどこで受けられますか？",
    answer:
      "現在、大阪・芦屋エリアでの対面指導に対応しています。詳しい場所・スケジュールについてはお問い合わせください。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-bg-section px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            よくある質問
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="pr-4 text-base font-bold text-primary">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 text-2xl text-accent transition-transform ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="border-t px-6 pb-6 pt-4">
                  <p className="text-sm leading-relaxed text-text-sub">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
