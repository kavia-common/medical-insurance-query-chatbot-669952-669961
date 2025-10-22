const KB = [
  {
    intent: 'coverage',
    keywords: ['cover', 'coverage', 'benefit', 'included', 'plan include'],
    response:
      'Coverage varies by plan. Commonly covered: primary care visits, specialist consultations, hospital stays, prescriptions, labs, and preventive care. Certain services may require prior authorization or have limits. Always check your Summary of Benefits.'
  },
  {
    intent: 'copay',
    keywords: ['copay', 'co-pay', 'co pay', 'co-payment'],
    response:
      'A copay is a fixed amount you pay for a covered service (e.g., $25 for a primary care visit). Copays usually apply at the time of service and do not count toward your deductible, but they do count toward your out-of-pocket maximum.'
  },
  {
    intent: 'deductible',
    keywords: ['deductible', 'deductibles'],
    response:
      'A deductible is the amount you pay for covered services before your plan starts to share costs. After you meet the deductible, you may pay coinsurance or copays until you reach your out-of-pocket maximum.'
  },
  {
    intent: 'network',
    keywords: ['network', 'in network', 'out of network', 'provider', 'doctor'],
    response:
      'In-network providers have contracted rates with your plan and usually cost less. Out-of-network providers may have higher costs or not be covered. Use your plan’s provider directory to confirm network status before receiving care.'
  },
  {
    intent: 'claims',
    keywords: ['claim', 'claims', 'submit', 'file', 'status'],
    response:
      'To submit a claim, complete the claim form and attach itemized receipts and necessary codes. For status updates, use your member portal or contact customer service. Keep copies of all documents for your records.'
  },
  {
    intent: 'prior_auth',
    keywords: ['prior auth', 'authorization', 'preauth', 'pre-authorization', 'referral'],
    response:
      'Some services require prior authorization. Your provider usually submits this on your behalf. Without authorization, coverage may be reduced or denied. Always verify if your service needs prior authorization beforehand.'
  },
  {
    intent: 'eligibility',
    keywords: ['eligible', 'eligibility', 'enroll', 'enrollment', 'qualify'],
    response:
      'Eligibility depends on your plan type and enrollment period. Many plans allow enrollment during open enrollment or after qualifying life events (e.g., marriage, birth, loss of coverage). Check your plan details for documentation requirements.'
  },
  {
    intent: 'preventive',
    keywords: ['preventive', 'wellness', 'screening', 'vaccination', 'annual exam'],
    response:
      'Most plans cover recommended preventive services at no cost when using in-network providers—such as annual wellness visits, routine vaccines, and certain screenings. Verify specific age and frequency guidelines in your plan.'
  },
  {
    intent: 'id_card',
    keywords: ['id card', 'member id', 'insurance card', 'card'],
    response:
      'Your digital ID card is often available in the member portal. For a physical card, request one via the portal or customer service. Keep your ID card with you when receiving care.'
  }
];

function normalize(text) {
  return text.toLowerCase();
}

// PUBLIC_INTERFACE
export function getInsuranceResponse(userText) {
  /**
   * Returns a canned response based on simple keyword matching.
   * If no match is found, a generic fallback is returned.
   */
  const t = normalize(userText);
  for (const entry of KB) {
    if (entry.keywords.some(k => t.includes(k))) {
      return entry.response;
    }
  }
  return (
    "I'm not fully sure about that. I can help with topics like coverage, copays, deductibles, " +
    "networks, claims, prior authorization, eligibility, and preventive care. Please avoid sharing personal health information."
  );
}
