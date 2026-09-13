export default function CtaSection() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 py-24 sm:py-32">
      {/* Background image */}
      <img
        src="https://res.cloudinary.com/qugyphlv/image/upload/v1789257421/cta.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(60,10,10,0.88) 0%, rgba(139,30,30,0.65) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Floating seal stamp */}
        <img
          src="https://res.cloudinary.com/qugyphlv/image/upload/v1789009070/dau-an-removebg-preview.png"
          alt="Ấn triện ThanhMaiHSK"
          className="mx-auto mb-6 h-[80px] w-[80px] animate-seal-float object-contain drop-shadow-lg"
        />

        {/* Gold-flanked label */}
        <div className="mb-5 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/70 sm:w-20" />
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-brand-gold">
            Bắt đầu hành trình của bạn
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/70 sm:w-20" />
        </div>

        <h2 className="font-display text-3xl leading-tight text-[#FCEBEB] sm:text-4xl lg:text-5xl">
          Sẵn Sàng Chinh Phục Tiếng Trung Cùng ThanhMaiHSK?
        </h2>

        <p className="mx-auto mt-5 max-w-xl font-sans leading-relaxed text-white/80">
          Đăng ký học thử miễn phí ngay hôm nay để trải nghiệm phương pháp giảng
          dạy chuẩn quốc tế cùng đội ngũ giảng viên chất lượng cao.
        </p>

        <a
          href="https://zalo.me/0398519485"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex min-h-[48px] items-center rounded-full bg-brand-gold px-8 py-4 font-sans text-base font-bold text-brand-brown shadow-lg shadow-black/25 transition-all duration-300 hover:scale-105 hover:bg-[#E8B563] hover:shadow-[0_0_30px_rgba(250,199,117,0.45)]"
        >
          Học Thử Miễn Phí
        </a>
      </div>
    </section>
  );
}
