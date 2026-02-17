export default function Footer() {
  return (
    <footer className="bg-primary px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-lg font-bold">医学部英語添削サービス</p>
            <p className="mt-1 text-sm opacity-70">
              医学部専門予備校 英語科主任による添削指導
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <a href="#features" className="hover:opacity-100">
              特徴
            </a>
            <a href="#courses" className="hover:opacity-100">
              コース
            </a>
            <a href="#profile" className="hover:opacity-100">
              講師紹介
            </a>
            <a href="#pricing" className="hover:opacity-100">
              料金
            </a>
            <a href="#faq" className="hover:opacity-100">
              FAQ
            </a>
            <a href="#contact" className="hover:opacity-100">
              お問い合わせ
            </a>
          </nav>
        </div>
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} 医学部英語添削サービス. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
