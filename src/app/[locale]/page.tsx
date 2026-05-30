import { getDictionary, hasLocale } from "@/locales/dictionaries";
import { notFound } from "next/navigation";
import HomeClient from "./HomeClient";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  return <HomeClient dict={dict} locale={locale} />;
}
