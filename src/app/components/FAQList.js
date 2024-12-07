import FAQItem from './FAQItem';

export default function FAQList({ faqs }) {
  return (
    <div>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
