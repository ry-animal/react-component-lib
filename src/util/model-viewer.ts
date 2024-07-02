/*
 * This file is a hacky way of allowing any other component to
 * use the <model-viewer /> tag just by doing:
 *   import "../../../util/model-viewer";
 *
 * The authors of the package do not expose it in a React-friendly
 * way, see: https://github.com/google/model-viewer/issues/1502
 *
 * The component documentation is at https://modelviewer.dev/docs/
 */

import "@google/model-viewer";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    export interface IntrinsicElements {
      "model-viewer": {
        src?: string;
        alt?: string;
        poster?: string;
        autoplay?: boolean;
        exposure?: number;
        "camera-controls"?: boolean;
        "environment-image"?: string;
        "seamless-poster"?: string;
        loading?: "auto" | "lazy" | "eager";
        reveal?: "auto" | "interaction" | "manual";
      } & React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
