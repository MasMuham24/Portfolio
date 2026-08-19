import { useEffect } from "react";

export const SITE_URL = "https://portfolio-six-ecru-77vqnhsrxg.vercel.app";
export const SITE_NAME = "Programmergabut.id";

export const seoRoutes = {
  "/": {
    title: "Jasa Pembuatan Website | Muhammad Syafi'i - Programmergabut.id",
    description:
      "Programmergabut.id - jasa pembuatan website profesional oleh Muhammad Syafi'i, fullstack developer dari Demak. Landing page, company profile, toko online, web app, REST API dengan React, Laravel, MySQL. Juara LKS Web Technology. Hubungi sekarang!",
    faq: true,
  },
  "/projects": {
    title: "Portofolio Projek Muhammad Syafi'i | Programmergabut.id",
    description:
      "Lihat portofolio projek Muhammad Syafi'i (Programmergabut.id): landing page cafe, REST API, sistem arsip, CMS, sistem sekolah, dan website lainnya yang dibangun dengan React, Laravel, PHP, dan MySQL.",
    faq: false,
  },
  "/certifications": {
    title: "Sertifikat & Prestasi LKS Muhammad Syafi'i | Programmergabut.id",
    description:
      "Sertifikat dan prestasi Muhammad Syafi'i (Programmergabut.id): Juara 1 LKS (Lomba Kompetensi Siswa) Web Technology Kabupaten Demak, Digiup Bootcamp Laravel, dan Dicoding.",
    faq: false,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa biaya jasa pembuatan website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biaya jasa pembuatan website di Programmergabut.id menyesuaikan kebutuhan dan kompleksitas project, mulai dari landing page hingga sistem informasi. Silakan hubungi Muhammad Syafi'i untuk konsultasi gratis dan penawaran harga terbaik.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja yang termasuk layanan jasa website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Layanan kami meliputi pembuatan landing page, company profile, toko online / e-commerce, sistem informasi, web app, hingga REST API dan backend menggunakan React, Laravel, dan MySQL.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses pembuatan website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waktu pengerjaan tergantung jenis website. Landing page atau company profile umumnya selesai dalam 3-7 hari, sedangkan web app atau sistem informasi bisa memakan waktu 2-4 minggu tergantung fitur.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah website yang dibuat sudah SEO friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, setiap website yang kami buat sudah menerapkan dasar-dasar SEO seperti struktur HTML yang rapi, meta description, judul yang optimal, kecepatan loading yang baik, serta responsive design agar mudah ditemukan di Google.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa kustomisasi desain website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tentu. Desain website sepenuhnya dapat dikustomisasi sesuai identitas brand Anda. Kami juga menyediakan layanan pembuatan landing page sesuai keinginan dengan konsep yang modern dan responsive.",
      },
    },
  ],
};

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function applySeo(path = "/") {
  const key = seoRoutes[path] ? path : "/";
  const seo = seoRoutes[key];
  const url = SITE_URL + (key === "/" ? "" : key);
  const image = `${SITE_URL}/og.png`;

  document.title = seo.title;
  upsertMeta("name", "description", seo.description);
  upsertMeta("property", "og:title", seo.title);
  upsertMeta("property", "og:description", seo.description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", image);
  upsertMeta("name", "twitter:title", seo.title);
  upsertMeta("name", "twitter:description", seo.description);
  upsertMeta("name", "twitter:image", image);
  upsertCanonical(url);

  if (seo.faq) {
    upsertJsonLd("faq-jsonld", faqJsonLd);
  } else {
    document.getElementById("faq-jsonld")?.remove();
  }
}

export function useSeo(path = "/") {
  useEffect(() => {
    applySeo(path);
  }, [path]);
}

export function faqJsonLdString() {
  return JSON.stringify(faqJsonLd);
}
