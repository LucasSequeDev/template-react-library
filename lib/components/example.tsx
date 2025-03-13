interface ExampleProps {
  title: string;
}

export const Example = ({ title }: ExampleProps) => {
  return <h1>{title}</h1>;
};
