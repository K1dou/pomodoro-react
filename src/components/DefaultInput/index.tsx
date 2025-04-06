type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export default function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input type={type} name="" id={id} {...rest} />
    </>
  );
}
