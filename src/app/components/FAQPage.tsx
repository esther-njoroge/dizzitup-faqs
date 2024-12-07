// import React from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const FAQPage: React.FC = () => {
//   const faqs = [
//     { question: "Has our service received approval?", answer: "Yes, our service is approved by the relevant authorities." },
//     { question: "How is our service different?", answer: "Our service provides unique benefits and features that are unmatched." },
//   ];

//   return (
//     <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
//       <Typography variant="h4" component="h1" align="center" gutterBottom>
//         Frequently Asked Questions
//       </Typography>
//       <Typography variant="subtitle1" align="center" paragraph>
//         New to our service and got questions? Hopefully, we can answer them below!
//       </Typography>

//       {faqs.map((faq, index) => (
//         <Accordion key={index}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography>{faq.question}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>{faq.answer}</Typography>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// };

// export default FAQPage;




import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const FAQPage: React.FC = () => {
  const { t } = useTranslation('common');

  const faqs = [
    { question: t('faq.question1'), answer: t('faq.answer1') },
    { question: t('faq.question2'), answer: t('faq.answer2') },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {t('faq.title')}
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        {t('faq.subtitle')}
      </Typography>

      <LanguageSwitcher />

      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQPage;
