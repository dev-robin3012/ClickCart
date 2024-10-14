import dynamic from "next/dynamic";

const Markdown = dynamic(() => import("./markdown2"));

export { Markdown };
