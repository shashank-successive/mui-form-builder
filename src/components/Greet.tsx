export default function Greet(props: { name: string }) {
  const { name } = props;
  return <h1>Hello {name}</h1>;
}
