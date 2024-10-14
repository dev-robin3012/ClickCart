declare module "react-image-zoom" {
  import * as React from "react";
  interface ReactImageZoomProps {
    width: number;
    height: number;
    img: string;
    zoomPosition: string;
    zoomWidth?: number;
    scale?: number;
    offset?: {};
    zoomStyle?: string;
    zoomLensStyle?: string;
  }
  export class ReactImageZoom extends React.Component<ReactImageZoomProps> {}
}
