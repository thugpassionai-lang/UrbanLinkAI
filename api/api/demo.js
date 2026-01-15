// UrbanLinkAI Compatibility Demo

function analyzeMessages(userA, userB) {
  let empathyScore = 0;
  let conflictScore = 0;

  const empathyWords = ["understand", "sorry", "feel", "hear", "care"];
  const dismissiveWords = ["whatever", "fine", "whatever", "sure", "ok"];

  empathyWords.forEach(word => {
    if (userB.toLowerCase().includes(word)) empathyScore += 2;
  });

  dismissiveWords.forEach(word => {
    if (userB.toLowerCase().includes(word)) conflictScore += 2;
  });

  let compatibility = 100 - (conflictScore * 10) + (empathyScore * 5);
  if (compatibility > 100) compatibility = 100;
  if (compatibility < 0) compatibility = 0;

  return {
    compatibility_score: compatibility,
    empathy: empathyScore > conflictScore ? "high" : "low",
    conflict_risk: conflictScore > empathyScore ? "high" : "low",
    relationship_viability: compatibility > 60 ? "strong" : "weak"
  };
}

// Example
const result = analyzeMessages(
  "I had a rough day. I needed someone to talk to.",
  "I'm sorry you went through that. I’m here for you."
);

console.log(result);
