import { createConfig, http, injected } from "wagmi";
import { base } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(),
  },
  multiInjectedProviderDiscovery: true,
});

// TODO(builder-code): replace this placeholder with the real Builder Code suffix
// once base.dev provides the final encoded builder code data for production.
export const builderCodeSuffix = {
  enabled: false,
  value: "TODO_REPLACE_WITH_BUILDER_CODE_SUFFIX",
  walletConnectProjectId: projectId ?? "TODO_REPLACE_WITH_PROJECT_ID",
};
