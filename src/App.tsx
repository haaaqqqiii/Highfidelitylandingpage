import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import svgPaths from "./imports/svg-ykyjw00sdb";
import imgImage1 from "figma:asset/45379f4f1443e3f5bab9f2d9c312b0da09d7c4be.png";
import imgImage6 from "figma:asset/c877c054dfba8e6a3de9363640882f0c706b48f7.png";
import imgImage7 from "figma:asset/809e28e3413c4653d772c7faed4ec00f8580ccd8.png";
import imgImage3 from "figma:asset/4b927201e5e12a37e7fddc815efa760b61ffca6e.png";
import imgHeroImage from "figma:asset/e10b69ffefb2df68132fc6692771604fa841f28d.png";
import { imgGroup } from "./imports/svg-z87du";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <LayananInformasiSection />
      <AktivitasDanKegiatanSection />
      <BeritaDanArtikelSection />
      <Footer />
    </div>
  );
}

// Navbar Component
function Navbar({ isScrolled }: { isScrolled: boolean }) {
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-[#2c5e8f]/95 shadow-lg" : "bg-[#2c5e8f]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img src={imgImage1} alt="PISA Logo" className="h-12 w-auto" />
          <div className="text-white">
            <p className="font-['Rubik_Bubbles:Regular',sans-serif] text-xs">
              PUSAT INFORMASI SAHABAT ANAK
            </p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[10px]">
              KOTA SURABAYA
            </p>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-6">
          <NavLink href="#beranda">BERANDA</NavLink>
          <NavLink href="#berita">BERITA</NavLink>
          <NavLink href="#video">VIDEO</NavLink>
          <NavLink href="#fasilitas">FASILITAS</NavLink>
          <NavLink href="#profil">PROFIL</NavLink>
          <NavLink href="#layanan">LAYANAN INFORMASI</NavLink>
          <NavLink href="#program">PROGRAM PENDUKUNG</NavLink>
          
          <motion.button
            className="bg-[#027a48] text-white px-4 py-2 rounded-lg text-xs font-['Kanit:Medium',sans-serif] flex items-center gap-2"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(2, 122, 72, 0.3)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <LockIcon />
            LOGIN
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-white text-xs font-['Kanit:Bold',sans-serif] relative group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
      />
    </motion.a>
  );
}

// Hero Section
function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen pt-24 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="font-['Kanit:Bold',sans-serif] text-4xl lg:text-6xl text-[#2c5e8f] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Selamat Datang di
          </motion.h1>
          <motion.h2
            className="font-['Kanit:Bold',sans-serif] text-3xl lg:text-5xl text-[#d92d20] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Pusat Informasi Sahabat Anak
          </motion.h2>
          <motion.h3
            className="font-['Kanit:Regular',sans-serif] text-2xl lg:text-3xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Kota Surabaya
          </motion.h3>
          <motion.p
            className="font-['Kanit:Regular',sans-serif] text-lg text-gray-600 mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Rumah Sahabat Anak adalah pusat informasi dan layanan terpadu untuk anak-anak di Kota Surabaya
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CTAButton>Jelajahi Layanan</CTAButton>
            <SecondaryButton>Pelajari Lebih Lanjut</SecondaryButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FloatingImage src={imgHeroImage} alt="Children at PISA" />
        </motion.div>
      </div>
    </section>
  );
}

// Layanan Informasi Section
function LayananInformasiSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <ServiceIcon1 />,
      title: "Rumah Kreatif",
      description: "Rumah Kreatif menyediakan wadah bagi bakat kesenian anak, meliputi sastra, tari modern, tari remo, karawitan, vokal, hingga seni teater.",
      color: "#F04438"
    },
    {
      icon: <ServiceIcon2 />,
      title: "Kelas Literasi Disleksia",
      description: "Kelas yang ditujukan untuk anak-anak yang memerlukan perilaku intensif akan kemampuan membaca",
      color: "#2E90FA"
    },
    {
      icon: <ServiceIcon3 />,
      title: "Kelas Literasi Bahasa",
      description: "Kelas Literasi Bahasa ditujukan untuk meningkatkan kemampuan berbahasa anak, terutama bahasa Inggris, dengan pendekatan yang menyenangkan",
      color: "#FDB022"
    },
    {
      icon: <ServiceIcon4 />,
      title: "Ruang Anak Berkarya",
      description: "Ruang Anak Berkarya memberikan wadah untuk anak berekspresi dalam berkarya, di berbagai bidang pengalaman literasi",
      color: "#12B76A"
    },
    {
      icon: <ServiceIcon5 />,
      title: "Kelas Literasi Membaca",
      description: "Meningkatkan kemampuan membaca serta pemahaman literasi anak dengan metode pembelajaran yang interaktif",
      color: "#9E77ED"
    },
    {
      icon: <ServiceIcon6 />,
      title: "Program Literasi",
      description: "Program untuk mendukung kegiatan literasi di lingkungan sekitar",
      color: "#FF6B6B"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white" id="layanan">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.h2
          className="font-['Kanit:Bold',sans-serif] text-3xl lg:text-4xl text-black mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          LAYANAN INFORMASI
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, color, index, isInView }: any) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    >
      <motion.div
        className="mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
          {icon}
        </div>
      </motion.div>
      <h3 className="font-['Kanit:Bold',sans-serif] text-xl text-black mb-3">
        {title}
      </h3>
      <p className="font-['Kanit:Medium',sans-serif] text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// Aktivitas Dan Kegiatan Section
function AktivitasDanKegiatanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const events = [
    {
      date: { day: "22", month: "JUNE", year: "2023" },
      title: "Kelas CALISTUNG & Numerasi - Batch 4",
      description: "Kelas yang ditujukan untuk anak-anak yang memerlukan pelatihan bahasa isyarat"
    },
    {
      date: { day: "28", month: "JUNE", year: "2023" },
      title: "Kelas BISINDO Anak - Batch 2",
      description: "Kelas yang ditujukan untuk anak-anak yang memerlukan pelatihan bahasa isyarat"
    },
    {
      date: { day: "28", month: "JUNE", year: "2023" },
      title: "Kelas Literasi Disleksia - Batch 3",
      description: "Kelas yang ditujukan untuk anak-anak yang memerlukan perilaku intensif akan kemampuan membaca"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.h2
          className="font-['Kanit:Bold',sans-serif] text-3xl lg:text-4xl text-black mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          AKTIVITAS DAN KEGIATAN
        </motion.h2>

        <div className="mb-8">
          <NavTabBar />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FloatingImage src={imgImage3} alt="Activity" className="rounded-xl" />
            <h3 className="font-['Kanit:Bold',sans-serif] text-2xl text-black mt-6 mb-2">
              Kelas BISINDO Anak - Batch 1
            </h3>
            <p className="font-['Kanit:Medium',sans-serif] text-base text-gray-600">
              Kelas yang ditujukan untuk anak-anak yang memerlukan pelatihan bahasa isyarat
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {events.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: any) {
  return (
    <motion.div
      className="flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
      whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="bg-[#edf6fe] rounded-xl p-3 flex flex-col items-center justify-center w-24 h-24 shrink-0">
        <p className="font-['Kanit:Bold',sans-serif] text-2xl text-black">{event.date.day}</p>
        <p className="font-['Kanit:Medium',sans-serif] text-sm text-black opacity-75">{event.date.month}</p>
        <p className="font-['Kanit:Regular',sans-serif] text-xs text-black opacity-50">{event.date.year}</p>
      </div>
      <div className="flex-1">
        <h4 className="font-['Kanit:Bold',sans-serif] text-lg text-black mb-2">
          {event.title}
        </h4>
        <p className="font-['Kanit:Medium',sans-serif] text-sm text-gray-600">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

// Berita Dan Artikel Section
function BeritaDanArtikelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const articles = [
    {
      type: "BERITA",
      image: imgImage6,
      title: "Surabaya Semarak dengan Event Literasi di Taman Baca Masyarakat",
      date: "11 MARET 2025"
    },
    {
      type: "ARTIKEL",
      image: imgImage7,
      title: "PISA Meriahkan Hari Kartini dengan Membaca Puisi",
      date: "24 APRIL 2025"
    }
  ];

  const popularArticles = [
    {
      type: "BERITA",
      title: "Surabaya Semarak dengan Event Literasi di Taman Baca Masyarakat",
      date: "11 MARET 2025"
    },
    {
      type: "ARTIKEL",
      title: "Read Aloud: Aku Bisa Membaca!",
      date: "10 OKTOBER 2023"
    },
    {
      type: "ARTIKEL",
      title: "PEMKOT Surabaya Gelar Unjuk Bakat Talenta Seni",
      date: "15 JULI 2023"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white" id="berita">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.h2
          className="font-['Kanit:Bold',sans-serif] text-3xl lg:text-4xl text-black mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          BERITA DAN ARTIKEL
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} index={index} isInView={isInView} />
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="font-['Kanit:Bold',sans-serif] text-2xl text-black flex items-center gap-2">
              <PopularIcon />
              Terpopuler
            </h3>
            {popularArticles.map((article, index) => (
              <MiniArticleCard key={index} article={article} index={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-between">
          <SecondaryButton>Lihat Semua Terkini</SecondaryButton>
          <SecondaryButton>Lihat Semua Terpopuler</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article, index, isInView }: any) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden aspect-[350/250]">
        <motion.img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-['Kanit:Medium',sans-serif]">
          {article.type}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-['Kanit:Bold',sans-serif] text-xl text-black mb-2 line-clamp-2 group-hover:text-[#2c5e8f] transition-colors">
          {article.title}
        </h3>
        <p className="font-['Kanit:Medium',sans-serif] text-sm text-gray-500">
          {article.date}
        </p>
      </div>
    </motion.div>
  );
}

function MiniArticleCard({ article, index }: any) {
  return (
    <motion.div
      className="p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-[#2c5e8f]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 4 }}
    >
      <div className="text-xs font-['Kanit:Medium',sans-serif] text-gray-500 mb-2">
        {article.type}
      </div>
      <h4 className="font-['Kanit:Bold',sans-serif] text-base text-black mb-2 line-clamp-2">
        {article.title}
      </h4>
      <p className="font-['Kanit:Medium',sans-serif] text-sm text-gray-500">
        {article.date}
      </p>
    </motion.div>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#2c5e8f] text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-['Kanit:Bold',sans-serif] text-2xl mb-6">Narahubung</h3>
            <div className="space-y-3">
              <p className="font-['Kanit:Regular',sans-serif] text-lg">(031) 5475 600</p>
              <p className="font-['Kanit:Regular',sans-serif] text-lg">pisa@surabaya.go.id</p>
            </div>
          </div>

          <div>
            <h3 className="font-['Kanit:Bold',sans-serif] text-2xl mb-6">Tautan Terkait</h3>
            <div className="space-y-3">
              <FooterLink href="#">Pemerintah Kota Surabaya</FooterLink>
              <FooterLink href="#">DISPUSIP Surabaya</FooterLink>
              <FooterLink href="#">Forum Anak Surabaya</FooterLink>
              <FooterLink href="#">GENRE Surabaya</FooterLink>
            </div>
          </div>

          <div>
            <h3 className="font-['Kanit:Bold',sans-serif] text-2xl mb-6">Alamat</h3>
            <p className="font-['Kanit:Regular',sans-serif] text-lg mb-4">
              Jl. Gubernur Suryo No. 15, Embong Kaliasin, Genteng, Surabaya, Jawa Timur 60271
            </p>
            <div className="space-y-2">
              <p className="font-['Kanit:Regular',sans-serif] text-lg">Senin: Tutup</p>
              <p className="font-['Kanit:Regular',sans-serif] text-lg">Selasa - Minggu: 9.00 AM - 9:30 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div className="flex gap-6">
              <FooterLink href="#">Departemen</FooterLink>
              <FooterLink href="#">Penafian</FooterLink>
              <FooterLink href="#">Privasi</FooterLink>
              <FooterLink href="#">Peta Laman</FooterLink>
              <FooterLink href="#">Aksesibilitas</FooterLink>
            </div>
            <div className="flex gap-4">
              <SocialIcon><FacebookIcon /></SocialIcon>
              <SocialIcon><TwitterIcon /></SocialIcon>
              <SocialIcon><InstagramIcon /></SocialIcon>
              <SocialIcon><YouTubeIcon /></SocialIcon>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-6 pt-8 border-t border-white/20">
          <div className="flex items-center gap-4">
            <img src={imgImage1} alt="PISA Logo" className="h-12 w-auto" />
            <div>
              <p className="font-['Rubik_Bubbles:Regular',sans-serif] text-xs">
                PUSAT INFORMASI SAHABAT ANAK
              </p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[10px]">
                KOTA SURABAYA
              </p>
            </div>
          </div>
          <p className="font-['Kanit:Regular',sans-serif] text-lg">
            © 2023 - PISA Kota Surabaya
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="font-['Kanit:Regular',sans-serif] text-lg hover:text-blue-200 transition-colors"
      whileHover={{ x: 4 }}
    >
      {children}
    </motion.a>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

// Reusable Components
function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      className="bg-[#2c5e8f] text-white px-8 py-4 rounded-xl font-['Kanit:Bold',sans-serif] text-lg relative overflow-hidden group"
      whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(44, 94, 143, 0.4)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      className="border-2 border-black text-black px-6 py-3 rounded-xl font-['Kanit:Regular',sans-serif] text-lg"
      whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}

function FloatingImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover rounded-2xl shadow-2xl" />
    </motion.div>
  );
}

function NavTabBar() {
  const tabs = ["Kegiatan Penting", "Galeri Foto", "Laman YouTube Resmi PISA Surabaya"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex gap-12 border-b-2 border-gray-200">
      {tabs.map((tab, index) => (
        <motion.button
          key={index}
          className={`font-['Kanit:Bold',sans-serif] text-xl pb-3 relative ${
            activeTab === index ? "text-black" : "text-black/50"
          }`}
          onClick={() => setActiveTab(index)}
          whileHover={{ scale: 1.05 }}
        >
          {tab}
          {activeTab === index && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
              layoutId="activeTab"
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

// Icons
function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.p2a7700} fill="white" opacity="0.5" />
      <path d={svgPaths.p27eafc80} fill="white" />
    </svg>
  );
}

function ServiceIcon1() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d={svgPaths.p188b5300} fill="white" stroke="white" strokeWidth="2" />
      <path d={svgPaths.p2c75e700} fill="#F04438" stroke="#F04438" strokeWidth="2" />
    </svg>
  );
}

function ServiceIcon2() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d={svgPaths.p30c6c80} fill="#2E90FA" />
    </svg>
  );
}

function ServiceIcon3() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d={svgPaths.p1cdb4200} fill="#FDB022" />
    </svg>
  );
}

function ServiceIcon4() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d={svgPaths.p24582780} fill="#12B76A" />
    </svg>
  );
}

function ServiceIcon5() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 23" fill="none">
      <path d={svgPaths.p1d5cd000} fill="#9E77ED" />
    </svg>
  );
}

function ServiceIcon6() {
  return (
    <svg width="25" height="27" viewBox="0 0 26 27" fill="none">
      <path d={svgPaths.p218b8c10} fill="#FF6B6B" />
    </svg>
  );
}

function PopularIcon() {
  return (
    <svg width="25" height="27" viewBox="0 0 26 27" fill="none">
      <path d={svgPaths.p218b8c10} fill="black" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="25" viewBox="0 0 14 25" fill="none">
      <path d={svgPaths.p2a128900} fill="black" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="25" height="23" viewBox="0 0 25 23" fill="none">
      <path d={svgPaths.p3116e900} fill="black" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path d={svgPaths.p27371100} fill="black" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="25" height="20" viewBox="0 0 25 20" fill="none">
      <path d={svgPaths.p6e4e570} stroke="black" strokeWidth="2" />
      <path d={svgPaths.p2bfce531} fill="black" />
    </svg>
  );
}
