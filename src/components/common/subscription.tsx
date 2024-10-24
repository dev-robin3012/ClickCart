import Input from "@/components/input";
import Button from "@/components/ui/button";
import { TextOld as Text } from "@/components/ui/text";
import { useForm } from "react-hook-form";

const data = {
  title: "Get Expert Tips In Your Inbox",
  description: "Subscribe to our newsletter and stay updated.",
  buttonText: "Subscribe",
};

interface Props {
  className?: string;
  disableBorderRadius?: boolean;
}

type FormValues = {
  subscription_email: string;
};

const defaultValues = {
  subscription_email: "",
};

const Subscription: React.FC<Props> = ({
  className = "px-5 sm:px-8 md:px-16 2xl:px-24",
  disableBorderRadius = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
  });

  const { title, description, buttonText } = data;
  async function onSubmit(input: FormValues) {
    console.log(input, "data");
  }

  return (
    <div
      className={`${className} flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16`}
    >
      <div className="lg:-mt-2 xl:-mt-0.5 text-center xl:text-start mb-7 md:mb-8 lg:mb-9 xl:mb-0">
        <Text
          variant="mediumHeading"
          // className='mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5'
          className="sm:mb-0 md:mb-2.5 lg:mb-3 xl:mb-3.5"
        >
          {title}
        </Text>
        <p className="text-body text-xs md:text-sm leading-6 md:leading-7">
          {description}
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-shrink-0 w-full sm:w-96 md:w-[545px]"
        noValidate
      >
        <div className="flex flex-col sm:flex-row items-start justify-end">
          <Input
            disableBorderRadius={disableBorderRadius}
            placeholderKey="Write your email here"
            type="email"
            variant="solid"
            className="w-full"
            inputClassName="px-4 lg:px-7 h-12 lg:h-14 text-center sm:text-start bg-white"
            {...register("subscription_email", {
              required: "forms:email-required",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "forms:email-error",
              },
            })}
            errorKey={errors.subscription_email?.message}
          />
          <Button
            disableBorderRadius={disableBorderRadius}
            className="mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 md:h-full flex-shrink-0"
          >
            <span className="lg:py-0.5">{buttonText}</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Subscription;
