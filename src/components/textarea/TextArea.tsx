interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
}

export default function TextArea({ rows = 4, ...props }: TextAreaProps) {
  return (
    <textarea
      rows={rows}
      className="rounded-lg p-4 bg-inputs resize-none"
      {...props}
    />
  );
}
