/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import CopyPlugin from "copy-webpack-plugin";

type Config = {
  customPath?: string;
};
export function DauikitWebpackPublicPlugin(config?: Config) {
  return new CopyPlugin( {
    patterns: [
      {
        from: "node_modules/@ByDSA/dauikit/public",
        to: `../public/${config?.customPath ?? "dauikit"}`,
      },
    ],
  } );
}