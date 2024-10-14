import { Collapse } from "@/components/common/accordion";
import ReviewForm from "@/components/common/form/review-form";
import { useState } from "react";

interface Props {
  data: [];
}

const ProductMetaReview: React.FC<Props> = ({ data }) => {
  const [expanded, setExpanded] = useState<number>(0);

  return (
    <>
      {data?.map((item: any, index: any) => (
        <Collapse
          i={index}
          key={item.title}
          title={item.title}
          translatorNS="review"
          content={
            data?.length === item.id ? (
              <>
                {item.content} <ReviewForm />
              </>
            ) : (
              item.content
            )
          }
          expanded={expanded}
          setExpanded={setExpanded}
          variant="transparent"
        />
      ))}
    </>
  );
};

export default ProductMetaReview;
