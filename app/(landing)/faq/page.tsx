import { FaqContainer } from "@/components/pages/tenants/styled";
import { FaqMainContainer, PageHeader } from "../styled";
import { Faq } from "@/components/common/Faq";

const faqs = [
  {
    question: "How can I sign up?",
    answer:
      "You can signup using get housing pass now button visbile on different section in the home page.",
  },
  {
    question: "How much does it cost?",
    answer:
      "After signup you will be redirected to pricing section, you can have updates about it there.",
  },
  {
    question: "How can I delete the data?",
    answer:
      "Your data will be deleted once you choose to close your profile. And we will automatically delete your data in 3 months.",
  },
  {
    question: "When do I get the results?",
    answer:
      "After the verification of your profile and kyc documents, your results can be generated.",
  },
  {
    question: "What II-partners do you have?",
    answer: "We will disclose that list shortly.",
  },
  {
    question: "Where can I delete my account?",
    answer: "From your account settings you can delete your account.",
  },
  {
    question: "Which results do I get?",
    answer:
      "You will get a certificate which you can share with your landlord.",
  },
  {
    question: "Why should I pay for this?",
    answer: "I will make your life easier while finding new appartment.",
  },
  {
    question: 'What does the term "housing pass" refer to?',
    answer:
      "It refers to a certificate with which you can get verified by your landlord.",
  },
  {
    question: "What measures ensure the high level of protection for my data?",
    answer:
      "We do not store your personal data, we use authorized third part to verify your documents. Once verified we do not store them in our system.",
  },
  {
    question: "What are the steps to permanently remove my account?",
    answer:
      "You can delete your account whenever you like from your account setting page.",
  },
  {
    question: "Which entities have access to view my data?",
    answer:
      "You have controll who can view your data, and the entities you select to view your data only they will be able to have access to your housing pass certificate.",
  },
  {
    question:
      "What is the timeframe during which the landlord can access my data?",
    answer:
      "Your landlord can access your certificate for at max 3 months, after that you will may need to regenerate your certificate.",
  },
  {
    question: "What is the process for submitting my application to landlords?",
    answer:
      "Once your housing pass certificate is generated you can share it with your landlord.",
  },
];

export default function FaqPage() {
  return (
    <FaqMainContainer>
      <PageHeader>Frequently asked questions</PageHeader>
      <FaqContainer>
        {faqs.map((faq, index) => (
          <Faq key={index} question={faq.question} answer={faq.answer} />
        ))}
      </FaqContainer>
    </FaqMainContainer>
  );
}
