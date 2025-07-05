import Link from "next/link";

export default function Button({ btnUrl, btnText, variant }) {
  return (
    <Link href={btnUrl} className={`cs_btn cs_style_1 ${variant}`}>
      <span>{btnText}</span>
      <i>
        <img src="/images/icons/arrow_white.svg" alt="Icon" />
        <img src="/images/icons/arrow_white.svg" alt="Icon" />
      </i>
    </Link>
  );
}
