import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import InteriorCursor from './components/InteriorCursor';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Interior Design', href: '#interior-design' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-[#E5E1DA] cursor-none">
      <InteriorCursor />
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md py-2 border-[#E5E1DA]/50 shadow-sm text-[#1A1A1A]'
            : 'bg-transparent py-4 border-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center group">
            <img 
              src={isScrolled ? "https://i.postimg.cc/ZKNLwBmN/oma-logo-1.png" : "https://i.postimg.cc/fb8LZywj/oma-logo-2.png"} 
              alt="OAMA Logo" 
              className="h-10 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#F9F8F6] flex flex-col items-center justify-center text-[#1A1A1A]"
          >
            <button
              className="absolute top-6 right-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display tracking-widest hover:text-[#C5A059] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center bg-[#E5E1DA] text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://i.postimg.cc/ZnCJJxft/hompimein-imiji-1.png"
              alt="Luxurious Interior"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0"></div>
          </div>
          <div className="absolute bottom-24 left-0 right-0 z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#gallery"
                className="group relative -left-[10px] inline-flex items-center gap-2 border border-white/40 px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-white/10 hover:opacity-80 transition-all duration-300 backdrop-blur-sm"
              >
                View Portfolio <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-6" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-40 px-6 lg:px-12 bg-white relative overflow-hidden border-b border-[#E5E1DA]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-[#C5A059] font-display italic text-lg mb-4">About Us</h2>
              <h3 className="text-3xl md:text-5xl font-display text-[#2D2D2D] leading-snug mb-8">
                일상을 예술로 만드는<br/> 공간의 가치
              </h3>
              <div className="space-y-6 text-[#666] text-sm md:text-base leading-relaxed">
                <p>
                  오아마공간연구소는 단순한 인테리어를 넘어, 고객의 삶의 방식과 취향을 깊이 이해하고 이를 공간이라는 캔버스에 담아내는 하이엔드 인테리어 디자인 스튜디오입니다.
                </p>
                <p>
                  빛, 선, 그리고 소재의 본질적인 아름다움을 탐구하며, 시간이 흘러도 변하지 않는 품격 있는 공간을 완성합니다. 하남 미사를 중심으로 주거 및 상업 공간에 새로운 가치를 부여하고 있습니다.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 aspect-[4/5] overflow-hidden bg-gray-200"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop"
                alt="About OAMA Interior"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </section>

        {/* Interior Design Section */}
        <section id="interior-design" className="py-24 md:py-32 bg-[#F9F8F6] text-[#1A1A1A] px-6 lg:px-12 border-b border-[#E5E1DA]">
           <div className="max-w-7xl mx-auto text-center mb-20">
              <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-[#888] mb-6">Interior Design</h2>
              <h3 className="text-4xl md:text-5xl font-display text-[#2D2D2D]">Our Philosophy</h3>
           </div>
           
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {[
                {
                  title: "Space Analysis",
                  desc: "공간의 구조, 채광, 라이프스타일을 다각도로 분석하여 최적의 레이아웃을 도출합니다."
                },
                {
                  title: "Material & Detail",
                  desc: "최고급 소재의 질감과 완성도 높은 디테일 매치로 하이엔드 퀄리티를 구현합니다."
                },
                {
                  title: "Timeless Beauty",
                  desc: "유행을 타지 않는 모던함과 클래식한 우아함을 결합하여 지속가능한 아름다움을 선사합니다."
                }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex flex-col border-t border-[#E5E1DA] pt-8"
                >
                  <span className="text-5xl font-display font-light text-[#C5A059] mb-6">{`0${i + 1}`}</span>
                  <h4 className="text-2xl font-display text-[#2D2D2D] mb-4">{item.title}</h4>
                  <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 md:py-40 bg-white border-b border-[#E5E1DA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-[#888] mb-6">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-display text-[#2D2D2D]">Featured Projects</h3>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 border-b border-[#1A1A1A] pb-1 text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
              View All Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-12 max-w-screen-2xl mx-auto">
            {[
              { img: "https://i.postimg.cc/hPX6qtKD/goyangsi-25pyeong-yaggug.png", title: "고양시 25평 약국", category: "Commercial" },
              { img: "https://i.postimg.cc/J76vgkVd/hanam-aipakeu5danji.png", title: "하남 아이파크 5단지", category: "Residential" },
              { img: "https://i.postimg.cc/gcHk64h6/hanam-misa-gangbyeon2cha-puleujio.png", title: "하남 미사 강변2차 푸르지오", category: "Residential" },
              { img: "https://i.postimg.cc/L5D9K6S3/incheon-yeonsugu-jeidiloyalheeo.png", title: "인천 연수구 제이디로얄헤어", category: "Commercial" },
              { img: "https://i.postimg.cc/d18Q6jxv/seongsudong-opiseu-intelieo.png", title: "성수동 스튜디오 인테리어", category: "Commercial" },
              { img: "https://i.postimg.cc/kgp5g4bZ/bucheon-sosayeog-daebog-yaggug-salye-1.png", title: "부천 소사역 대복약국", category: "Commercial" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="overflow-hidden aspect-square bg-[#1a1a1a] w-full relative rounded-sm">
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 z-20 transition-opacity duration-500 group-hover:opacity-0">
                    <img 
                      src="https://i.postimg.cc/fb8LZywj/oma-logo-2.png" 
                      alt="OAMA Logo" 
                      className="w-[45px]" 
                    />
                    <span className="text-white hover:bg-white hover:text-black transition-colors uppercase tracking-[0.2em] text-xs font-medium border border-white px-4 py-2">
                      View Project
                    </span>
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover absolute inset-0 z-10 transform scale-110 group-hover:scale-100 transition-all duration-700 ease-in-out"
                  />
                </div>
                <div className="pt-4 pb-8 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-[#888] mb-1 block">{item.category}</span>
                  <h4 className="text-lg font-display text-[#2D2D2D] group-hover:text-[#C5A059] transition-colors">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          
           <div className="md:hidden mt-8 text-center px-6">
             <a href="#" className="inline-flex items-center gap-2 border-b border-[#1A1A1A] pb-1 text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">
                View All Projects <ArrowRight className="w-4 h-4" />
              </a>
           </div>
        </section>

        {/* Inquiry / Quotation */}
        <section id="inquiry" className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-sm uppercase tracking-[0.2em] font-semibold text-[#888] mb-6">Inquiry</h2>
              <h3 className="text-4xl md:text-5xl font-display text-[#2D2D2D]">견적 문의하기</h3>
              <p className="mt-6 text-[#666] text-sm">새로운 공간을 위한 여정을 시작합니다. 아래 폼을 작성해주시면 확인 후 연락드리겠습니다.</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs uppercase tracking-widest text-[#666] font-medium">고객명 / 상호명 <span className="text-[#C5A059]">*</span></label>
                  <input type="text" className="w-full border-b border-[#E5E1DA] py-2 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors text-sm" placeholder="홍길동 / (주)오아마" required />
                </div>
                {/* Phone - 연락처는 소통을 위해 필수입니다 */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs uppercase tracking-widest text-[#666] font-medium">연락처 <span className="text-[#C5A059]">*</span></label>
                  <input type="tel" className="w-full border-b border-[#E5E1DA] py-2 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors text-sm" placeholder="010-0000-0000" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Business Type */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs uppercase tracking-widest text-[#666] font-medium">사용 업종 <span className="text-[#C5A059]">*</span></label>
                  <input type="text" className="w-full border-b border-[#E5E1DA] py-2 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors text-sm" placeholder="카페, 오피스, 주거 등" required />
                </div>
                {/* Area */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs uppercase tracking-widest text-[#666] font-medium">면적 (평/m²) <span className="text-[#C5A059]">*</span></label>
                  <input type="text" className="w-full border-b border-[#E5E1DA] py-2 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors text-sm" placeholder="약 30평" required />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-xs uppercase tracking-widest text-[#666] font-medium">단지명 및 주소 <span className="text-[#C5A059]">*</span></label>
                <input type="text" className="w-full border-b border-[#E5E1DA] py-2 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors text-sm" placeholder="현장(또는 예정지) 주소를 입력해주세요" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Budget - 인테리어 상담 시 매우 중요한 기준입니다 */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs uppercase tracking-widest text-[#666] font-medium">예상 예산</label>
                  <input type="text" className="w-full border-b border-[#E5E1DA] py-2 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors text-sm" placeholder="예: 5000만원 / 협의 후 결정" />
                </div>
                {/* Schedule - 인테리어 스케줄링을 위해 필요합니다 */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs uppercase tracking-widest text-[#666] font-medium">예상 공사 일정</label>
                  <input type="text" className="w-full border-b border-[#E5E1DA] py-2 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors text-sm" placeholder="예: 202X년 X월 초" />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-xs uppercase tracking-widest text-[#666] font-medium">상세 내용 및 요청사항</label>
                <textarea rows={5} className="w-full border-b border-[#E5E1DA] py-2 bg-transparent focus:outline-none focus:border-[#C5A059] transition-colors text-sm resize-none" placeholder="원하시는 컨셉이나 특별한 요구사항이 있다면 자유롭게 적어주세요."></textarea>
              </div>

              <div className="pt-8 text-center">
                <button type="submit" className="bg-[#1A1A1A] text-white px-12 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#C5A059] transition-colors">
                  견적 문의 보내기
                </button>
              </div>
            </form>
          </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#F9F8F6] text-[#1A1A1A] py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between mb-16 gap-16 md:gap-0">
          <div className="md:w-1/3">
             <h2 className="text-2xl font-display mb-6 text-[#1A1A1A] font-bold uppercase tracking-widest">OAMA <br/><span className="text-sm font-light tracking-normal">Interior</span></h2>
             <p className="text-sm text-[#666] leading-relaxed mb-8 max-w-sm">
                고객의 아이덴티티가 녹아든 하이엔드 인테리어 디자인. <br/>당신만의 특별한 공간을 디자인해 드립니다.
             </p>
             <div className="flex gap-4">
                <a href="https://blog.naver.com/oama_space_interior" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#E5E1DA] flex items-center justify-center text-[#666] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                  <span className="font-bold text-sm">N</span>
                </a>
                <a href="https://www.instagram.com/oama_spacelab_official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#E5E1DA] flex items-center justify-center text-[#666] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://open.kakao.com/o/sNVznA1c" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#E5E1DA] flex items-center justify-center text-[#666] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.477 3 2 6.551 2 10.93c0 2.822 1.83 5.3 4.675 6.643-.223.82-.81 2.946-.84 3.064-.04.165.064.215.174.143.084-.055 2.766-1.8 3.86-2.61.688.196 1.411.3 2.131.3 5.523 0 10-3.551 10-7.93S17.523 3 12 3z"/>
                  </svg>
                </a>
             </div>
          </div>
          
          <div className="md:w-2/3 flex flex-col md:flex-row gap-12 md:gap-24 md:justify-end">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#888] mb-6 font-semibold">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-sm text-[#666] leading-relaxed">
                  <Phone className="w-4 h-4 text-[#C5A059] mt-1 shrink-0" />
                  <span>010-XXXX-XXXX <br/><span className="text-[#888] text-xs">상담 시간: 09:00 - 18:00 (월-금)</span></span>
                </li>
                <li className="flex items-center gap-4 text-sm text-[#666] leading-relaxed">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>contact@oamaspace.com</span>
                </li>
                <li className="flex items-start gap-4 text-sm text-[#666] leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#C5A059] mt-1 shrink-0" />
                  <span>경기도 하남시 미사강변대로 <br/>오아마공간연구소</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#888] mb-6 font-semibold">Menu</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-[#666] hover:text-[#C5A059] transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-6 border-t border-[#E5E1DA] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} OAMA SPACE INTERIOR. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#666] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#666] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
