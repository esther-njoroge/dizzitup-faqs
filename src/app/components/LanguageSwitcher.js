
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const { locales, asPath } = router;

//   return (
//     <div>
//       {locales.map((locale) => (
//         <Link key={locale} href={asPath} locale={locale}>
//           <button style={{ margin: '0 5px' }}>{locale.toUpperCase()}</button>
//         </Link>
//       ))}
//     </div>
//   );
// }



// second

// import Link from 'next/link';
// import { useRouter } from 'next/router';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const { locales, asPath } = router;

//   return (
//     <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//       {locales.map((locale) => (
//         <Link key={locale} href={asPath} locale={locale}>
//           <button style={{ margin: '0 5px', padding: '8px 12px', cursor: 'pointer' }}>
//             {locale.toUpperCase()}
//           </button>
//         </Link>
//       ))}
//     </div>
//   );
// }




// third

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locales, asPath } = router;

  return (
    <div>
      {locales.map((locale) => (
        <Link key={locale} href={asPath} locale={locale} legacyBehavior>
          <a style={{ margin: '0 5px' }}>{locale.toUpperCase()}</a>
        </Link>
      ))}
    </div>
  );
}
