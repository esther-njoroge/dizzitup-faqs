// // import { useTranslation } from 'next-i18next';
// // import FAQList from '../components/FAQList';
// // import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// // import LanguageSwitcher from '../components/LanguageSwitcher';

// // export default function FAQPage() {
// //   const { t } = useTranslation();
  
// //   const faqs = [
// //     { question: t('faq.question1'), answer: t('faq.answer1') },
// //     { question: t('faq.question2'), answer: t('faq.answer2') },
// //   ];

// //   return (
// //     <div style={{ maxWidth: 600, margin: 'auto' }}>
// //       <h1>{t('faq.title')}</h1>
// //       <p>{t('faq.subtitle')}</p>
// //       <FAQList faqs={faqs} />
// //     </div>
// //   );
// // }

// // export async function getStaticProps({ locale }) {
// //   return {
// //     props: {
// //       ...(await serverSideTranslations(locale, ['common'])),
// //     },
// //   };
// // }




// import { useTranslation } from 'next-i18next';
// import FAQList from '../components/FAQList';
// import LanguageSwitcher from '../components/LanguageSwitcher';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// export default function FAQPage() {
//   const { t } = useTranslation('common');

//   const faqs = [
//     { question: t('faq.question1'), answer: t('faq.answer1') },
//     { question: t('faq.question2'), answer: t('faq.answer2') },
//   ];

//   return (
//     <div style={{ padding: '2rem', maxWidth: 600, margin: 'auto' }}>
//       <LanguageSwitcher />
//       <h1>{t('faq.title')}</h1>
//       <p>{t('faq.subtitle')}</p>
//       <FAQList faqs={faqs} />
//     </div>
//   );
// }

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// }



// second

// import { useTranslation } from 'next-i18next';
// import FAQList from '../components/FAQList';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import LanguageSwitcher from '../components/LanguageSwitcher';

// export default function FAQPage() {
//   const { t } = useTranslation();

//   const faqs = [
//     { question: t('faq.question1'), answer: t('faq.answer1') },
//     { question: t('faq.question2'), answer: t('faq.answer2') },
//   ];

//   return (
//     <div style={{ maxWidth: 600, margin: 'auto' }}>
//       <h1>{t('faq.title')}</h1>
//       <p>{t('faq.subtitle')}</p>
//       <LanguageSwitcher />
//       <FAQList faqs={faqs} />
//     </div>
//   );
// }

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// }



// third

import { useTranslation } from 'next-i18next';
import FAQList from '../components/FAQList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function FAQPage() {
  const { t } = useTranslation('common');

  const faqs = [
    { question: t('faq.question1'), answer: t('faq.answer1') },
    { question: t('faq.question2'), answer: t('faq.answer2') },
  ];

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>{t('faq.title')}</h1>
      <p>{t('faq.subtitle')}</p>
      <LanguageSwitcher />
      <FAQList faqs={faqs} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
