const releaseConfig = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    [
      "@codedependant/semantic-release-docker",
      {
        dockerArgs: {
          CONTENTFUL_GRAPHQL_ENDPOINT: true,
        },
        dockerFile: "dockerfile",
        dockerLogin: false,
        dockerRegistry: process.env.DOCKER_REGISTRY,
      },
    ],
  ],
};

export default releaseConfig;
