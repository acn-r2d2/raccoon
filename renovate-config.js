module.exports = {
  prHourlyLimit: 0,
  prConcurrentLimit: 0,
  extends: [
    "config:recommended",
    "docker:enableMajor",
    "mergeConfidence:all-badges",
    ":semanticCommits",
  ],
  onboarding: true,
  onboardingCommitMessage: "add renovate.json",
  onboardingPrTitle: "configure renovate",
  major: {
    semanticCommitType: "feat",
    commitMessagePrefix: "feat(deps):",
  },
  minor: {
    semanticCommitType: "feat",
    commitMessagePrefix: "feat(deps):",
  },
  digest: {
    semanticCommitType: "feat",
    commitMessagePrefix: "feat(deps):",
  },
  patch: {
    semanticCommitType: "fix",
    commitMessagePrefix: "fix(deps):",
  },
};
