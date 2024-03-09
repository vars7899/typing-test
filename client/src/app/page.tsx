import TextAssignment from "@/components/TextAssignment";
import Keyboard from "@/components/keyboard";
import Timer from "@/components/timer";

const SampleTextAssignment = "This is sample test";

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
