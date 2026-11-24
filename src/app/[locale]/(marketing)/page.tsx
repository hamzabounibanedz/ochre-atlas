import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { PaletteLibrary } from '@/templates/PaletteLibrary';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fr' ? 'Ochre Atlas | Bibliothèque de couleurs' : 'Ochre Atlas | Colour library',
    description: locale === 'fr' ? 'Des palettes de quatre couleurs pour vos projets.' : 'Four-colour studies for print, interiors and digital design.',
  };
}

export default async function Index({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PaletteLibrary french={locale === 'fr'} />;
}
