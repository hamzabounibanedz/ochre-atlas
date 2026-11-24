'use client';

import { useState } from 'react';
import Link from 'next/link';

const studies = [
  { name: ['Kiln Yard', 'Cour du four'], category: 'earth', colours: ['#963F2D', '#D49B6B', '#EFDCC2', '#473B35'] },
  { name: ['Salt Marsh', 'Marais salant'], category: 'coast', colours: ['#354D4C', '#719591', '#C4CFB6', '#E8DFCE'] },
  { name: ['Night Train', 'Train de nuit'], category: 'city', colours: ['#252A40', '#555477', '#B394BE', '#EBD8B9'] },
  { name: ['Dry Garden', 'Jardin sec'], category: 'earth', colours: ['#685D43', '#9C995F', '#D1B980', '#F1E6CE'] },
  { name: ['Breakwater', 'Brise-lames'], category: 'coast', colours: ['#293F60', '#567AA3', '#B5C9CE', '#DBAA88'] },
  { name: ['Market Hall', 'Halles du marché'], category: 'city', colours: ['#702F40', '#AB6974', '#DCB392', '#E8D9CA'] },
];
const filters = [
  ['all', 'All studies', 'Toutes'], ['earth', 'Earth', 'Terre'], ['coast', 'Coast', 'Littoral'], ['city', 'City', 'Ville'],
] as const;

export function PaletteLibrary({ french }: { french: boolean }) {
  const [filter, setFilter] = useState('all');
  const [notice, setNotice] = useState('');
  const i = french ? 1 : 0;
  async function copy(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      setNotice(french ? hex + ' copié' : 'Copied ' + hex);
    } catch {
      setNotice(french ? 'Code à copier : ' + hex : 'Copy this code: ' + hex);
    }
  }
  return (
    <main className="atlas" id="top">
      <header className="oa-nav">
        <Link href={french ? '/fr' : '/'} className="oa-wordmark">Ochre Atlas<span aria-hidden="true">.</span></Link>
        <nav aria-label={french ? 'Navigation principale' : 'Main navigation'}>
          <a href="#library">{french ? 'Bibliothèque' : 'Library'}</a>
          <Link href={french ? '/' : '/fr'} hrefLang={french ? 'en' : 'fr'} lang={french ? 'en' : 'fr'}>{french ? 'English' : 'Français'}</Link>
        </nav>
      </header>
      <section className="oa-hero">
        <div>
          <h1>{french ? 'Carnet de' : 'Field notes'}<br /><em>{french ? 'couleurs.' : 'in colour.'}</em></h1>
          <p>{french ? 'Six études chromatiques inspirées de la terre, du littoral et de la ville. Une bibliothèque pour le papier, les espaces et les écrans.' : 'Six palette studies drawn from earth, coast and city. A colour library for paper, spaces and screens.'}</p>
          <a className="oa-link" href="#library">{french ? 'Parcourir les palettes' : 'Browse the palettes'} <span aria-hidden="true">↓</span></a>
        </div>
        <figure className="oa-poster">
          <div className="oa-art" aria-hidden="true"><i /><b /><span /></div>
          <figcaption><span>{french ? 'Étude chromatique' : 'Colour study'}</span><strong>{studies[0]!.name[i]}</strong></figcaption>
        </figure>
      </section>
      <section id="library" className="oa-library">
        <h2>{french ? 'Bibliothèque de palettes' : 'Palette library'}</h2>
        <p>{french ? 'Sélectionnez une couleur pour copier son code hexadécimal.' : 'Select a swatch to copy its hex code.'}</p>
        <div className="oa-filters" role="group" aria-label={french ? 'Filtrer par lieu' : 'Filter by setting'}>
          {filters.map(([value, en, fr]) => <button key={value} type="button" aria-pressed={value === filter} onClick={() => { setFilter(value); setNotice(''); }}>{french ? fr : en}</button>)}
        </div>
        <div className="oa-cards">
          {studies.filter(s => filter === 'all' || s.category === filter).map(s => (
            <article key={s.name[0]}>
              <h3>{s.name[i]}</h3>
              <div className="oa-swatches">{s.colours.map(hex => (
                <button key={hex} type="button" onClick={() => copy(hex)} aria-label={(french ? 'Copier ' : 'Copy ') + hex}>
                  <i style={{ backgroundColor: hex }} /><span>{hex}</span>
                </button>
              ))}</div>
            </article>
          ))}
        </div>
        <output aria-live="polite" className={notice ? 'oa-notice' : undefined}>{notice}</output>
      </section>
      <footer><span>Ochre Atlas</span><a href="#top">{french ? 'Haut de page' : 'Back to top'} ↑</a></footer>
    </main>
  );
}
