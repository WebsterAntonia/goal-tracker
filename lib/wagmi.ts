import { Attribution } from "ox/erc8021";
import { createConfig, createStorage, cookieStorage, http, injected } from "wagmi";
import { base } from "wagmi/chains";
import { BUILDER_CODE, BUILDER_CODE_DATA_SUFFIX } from "@/lib/base-app";

const generatedDataSuffix = Attribution.toDataSuffix({ codes: [BUILDER_CODE] });

if (generatedDataSuffix !== BUILDER_CODE_DATA_SUFFIX) {
  throw new Error("Builder code data suffix does not match the provided encoded ERC-8021 suffix.");
}

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  storage: createStorage({ storage: cookieStorage }),
  ssr: true,
  transports: {
    [base.id]: http(),
  },
  multiInjectedProviderDiscovery: true,
  dataSuffix: {
    value: BUILDER_CODE_DATA_SUFFIX,
    required: true,
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}

export const builderCodeSuffix = {
  enabled: true,
  code: BUILDER_CODE,
  value: BUILDER_CODE_DATA_SUFFIX,
  verified: generatedDataSuffix === BUILDER_CODE_DATA_SUFFIX,
};
