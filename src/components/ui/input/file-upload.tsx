import Iconstore from "@/components/icon-store";
import { cn } from "@/utils/class-merge";
import { ClassValue } from "clsx";
import { type FC } from "react";

interface Props {
  label?: string;
  accept?: string;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (previews: string[], file: any) => void;
  className?: ClassValue;
}

const FileUploadField: FC<Props> = ({
  label = "Click",
  onChange,
  accept = "",
  disabled,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center border rounded-lg group",
        disabled && "cursor-not-allowed",
        className
      )}
    >
      <label className="w-full px-6 py-4 flex flex-col items-center cursor-pointer">
        <div className="group-hover:bg-gray-medium/50 transition-all p-1.5 rounded-full">
          <Iconstore
            name="image-placeholder"
            className={`text-3xl ${
              disabled ? "text-gray-default" : " text-primary"
            }`}
          />
        </div>

        <p
          className={`font-semibold text-sm ${
            disabled ? "text-gray" : "text-primary"
          }`}
        >
          {label}
        </p>

        <input
          type="file"
          className="hidden"
          disabled={disabled}
          multiple
          accept={accept}
          onChange={async (e) => {
            const files = e.target.files;

            if (files?.length && !!onChange) {
              const previews = await Promise.all(
                Array.from(files).map((file) => {
                  return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      resolve(reader.result); // Resolving the base64 string
                    };
                    reader.onerror = (error) => reject(error); // Rejecting in case of an error
                  });
                })
              );

              onChange(previews as string[], files);
            }
          }}
        />
      </label>
    </div>
  );
};

export default FileUploadField;
