import { BookOpen, Award, MapPin } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Khóa Học Chuyên Sâu',
    desc: 'Từ luyện thi HSK đến tiếng Trung giao tiếp và thương mại — chương trình học được thiết kế bởi đội ngũ giáo viên dày dặn kinh nghiệm.',
  },
  {
    icon: Award,
    title: 'Giáo Viên Bản Ngữ',
    desc: 'Học cùng các thầy cô người Trung Quốc với nhiều năm giảng dạy, truyền đạt không chỉ ngôn ngữ mà còn văn hóa ứng dụng thực tế.',
  },
  {
    icon: MapPin,
    title: 'Cơ Sở Tiện Nghi',
    desc: 'Phòng học hiện đại, không gian thân thiện tại nhiều chi nhánh, tạo môi trường luyện tập tiếng Trung tối ưu cho học viên.',
  },
];

export default function NextSection() {
  return (
    <section className="relative bg-brand-cream pt-36 sm:pt-44 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-script italic text-lg text-brand-gold-deep mb-2">
          ThanhMai HSK
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-red mb-5">
          Nơi Truyền Thống Gặp Gỡ Hiện Đại
        </h2>
        <p className="font-sans text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
          Tại ThanhMai HSK, chúng tôi kết hợp di sản giáo dục tiếng Trung truyền
          thống với phương pháp giảng dạy hiện đại, mang đến hành trình học ngôn
          ngữ vượt trội cho mọi học viên.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-8 text-left shadow-sm hover:shadow-xl border border-brand-gold-light/40 hover:border-brand-gold/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-brand-red group-hover:text-brand-brown transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl text-brand-red mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
