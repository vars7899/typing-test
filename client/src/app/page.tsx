import Keyboard from "@/components/keyboard";
import Timer from "@/components/timer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-800">
      <div className="w-[1096px]">
        <Timer className={"my-4"} timespan={120} />
        <Keyboard />
      </div>
    </main>
  );
}
