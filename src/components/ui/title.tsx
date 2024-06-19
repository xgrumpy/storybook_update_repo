import { satoshiFont } from "@/fonts";

type ValidTags = keyof JSX.IntrinsicElements;

type Props = {
  children: React.ReactNode,
  tag?: ValidTags,
  weight: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
}

export default function Title({ children, tag, weight }: Props): JSX.Element {
  const Tag: ValidTags = tag as ValidTags;

  return (
    <div className={`pb-4 pt-4 ${satoshiFont.className}`}>
      <Tag className={`font-${weight}`}>
        {children}
      </Tag>
    </div>
  );
};


Title.defaultProps = {
  children: 'Proxie Health',
  tag: 'h2',
  weight: 'bold',
};
