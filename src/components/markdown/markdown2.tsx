import React from "react";
import styles from "./markdown.module.css";

const Markdown2 = ({ content }: { content: string }) => {
  return (
    <div className={styles.markdown}>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Markdown2;
