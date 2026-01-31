import React, { useState } from 'react';
import { ChevronDown, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Am I "technical enough" to join?',
      answer:
        'The short answer is "yes". While TLL started with a focus on software engineers, we recognise that women in other tech roles face the same challenges with career progression. We have a lot of Product people, Agile people, QA, Chiefs of Staff, founders and CEOs. If you are a recruiter or in HR and are joining to fill open roles, we ask you to find different networking opportunities. If you genuinely want to support and give back to this community, then you are welcome.',
    },
    {
      question: 'I am not a leader. Can I still join?',
      answer:
        'We encourage you to join us as early in your career as possible, so you have access to the same support, advocacy, sponsorship and networks your male peers get internally. We want you to be inspired by the role models and senior leaders in this group, and show you that you can do it too!\n\nOur community has members from those looking to get into tech, juniors and career-changers  right through to CEOs and executive leaders.',
    },
    {
      question: 'I don\'t identify as a "Lady", can I join?',
      answer:
        'Our members are women identifying and non-binary folks in the tech industry who are held back in their careers due to systemic bias. Please use this guideline to help you. If you are a trans woman, you are welcome. If you identify as non-binary AMAB you are welcome. If you need our help to overcome gender bias, we want to help you.',
    },
    {
      question: 'I am a man, but I want to help. Can I join?',
      answer:
        'We appreciate your support! While our community is specifically for women-identifying and non-binary folks, there are many ways you can help:\n\n• Sponsor women in your workplace\n• Advocate for equal pay and promotions\n• Share our content and events\n• Become a sponsor of Tech Leading Ladies\n\nPlease contact us if you\'d like to discuss sponsorship opportunities.',
    },
    {
      question: 'I\'d like to employ women in tech. How can I post a job ad?',
      answer:
        'We partner with companies who are dedicated to building diverse and inclusive workplaces. Our sponsorship packages provide partners with the opportunity to post job ads on our internal Slack #jobs channel.\n\nAll job postings must adhere to our guidelines, including:\n• Transparent salary ranges\n• Commitment to interview TLL candidates\n• Inclusive company culture\n• Equal pay commitments\n\nPlease visit our Sponsors page or contact us for more information about becoming a sponsor.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-purple-600 text-left pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;