import { satoshiFont } from "@/fonts/index";

// https://nextjs.org/docs/app/api-reference/components/font

const SampleText = `"The quick brown fox jumps over the lazy dog" is an English-language pangram — a sentence that contains all the letters of the alphabet. The phrase is commonly used for touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where the use of all letters in the alphabet is desired.`;

const fonts = [
  { font: satoshiFont, name: 'Satoshi font' },
];

export default function FontSamples() {
  return (
    <main className="p-10">
      {fonts.map((f, i) => {
        return (
          <div className={f.font.className} key={i}>
            <h1 className="font-semibold pb-2">{f.name}</h1>
            <p className="pb-4 font-medium text-sm">{SampleText}</p>
            <p className="pb-4 font-medium text-lg">{SampleText}</p>
          </div>
        );
      })}
    </main>
  );
};
