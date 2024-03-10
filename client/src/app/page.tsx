import TextAssignment from "@/components/TextAssignment";
import Keyboard from "@/components/keyboard";
import Timer from "@/components/timer";

const SampleTextAssignment =
  "Type the paragraphs as fast as you can, but remember that accuracy is just as important as speed.";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-800">
      <div className="w-[1096px]">
        <Timer className={"my-4"} timespan={120} />
        <TextAssignment content={SampleTextAssignment} />
        <Keyboard />
      </div>
    </main>
  );
}
