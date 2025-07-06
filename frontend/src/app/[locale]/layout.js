import getMessages from "@/lib/getMessages";
import LocaleProvider from "@/components/LocaleProvider";
import Header from "@/components/Header"; // ✅ 추가
import Footer from "@/components/Footer"; // ✅ 추가

export default async function LocaleLayout({ children, params }) {
  const messages = await getMessages(params.locale);

  return (
    <html lang={params.locale}>
      <body>
        <LocaleProvider locale={params.locale} messages={messages}>
          <Header /> {/* ✅ Header 위치 */}
          {children}
          <Footer /> {/* ✅ Footer 위치 */}
        </LocaleProvider>
      </body>
    </html>
  );
}
