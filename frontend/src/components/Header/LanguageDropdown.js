// components/LanguageDropdown.jsx
"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const LANGUAGES = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
];

export default function LanguageDropdown() {
  const [lang, setLang] = useState("ko");

  useEffect(() => {
    const savedLang = Cookies.get("lang");
    if (savedLang) {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.startsWith("en") ? "en" : "ko";
      Cookies.set("lang", browserLang, { expires: 365 });
      setLang(browserLang);
    }
  }, []);

  const handleLangChange = (code) => {
    setLang(code);
    Cookies.set("lang", code, { expires: 365 });
    location.reload(); // 새로고침으로 적용
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-globe me-2"></i>{" "}
        {LANGUAGES.find((l) => l.code === lang)?.label}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {LANGUAGES.map((l) => (
          <li key={l.code}>
            <button
              className={`dropdown-item ${lang === l.code ? "active" : ""}`}
              onClick={() => handleLangChange(l.code)}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
