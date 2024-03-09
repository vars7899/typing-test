import React from "react";
import Keycap from "./Keycap";

export default function Keyboard() {
  return (
    <div className="">
      <div className="grid grid-cols-[repeat(48,_15px)] grid-flow-row gap-2">
        <Keycap
          centerLabel="`"
          topLeftLabel="~"
          keyCode={["Backquote"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="1"
          topLeftLabel="!"
          keyCode={["Digit1"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="2"
          topLeftLabel="@"
          keyCode={["Digit2"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="3"
          topLeftLabel="#"
          keyCode={["Digit3"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="4"
          topLeftLabel="$"
          keyCode={["Digit4"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="5"
          topLeftLabel="%"
          keyCode={["Digit5"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="6"
          topLeftLabel="^"
          keyCode={["Digit6"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="7"
          topLeftLabel="&"
          keyCode={["Digit7"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="8"
          topLeftLabel="*"
          keyCode={["Digit8"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="9"
          topLeftLabel="("
          keyCode={["Digit9"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="0"
          topLeftLabel=")"
          keyCode={["Digit0"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="-"
          topLeftLabel="_"
          keyCode={["Minus"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="="
          topLeftLabel="+"
          keyCode={["Equal"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="Backspace"
          keyCode={["Backspace"]}
          width={"col-span-9"}
        />
        <Keycap centerLabel="Tab" keyCode={["Tab"]} width={"col-span-5"} />
        <Keycap centerLabel="Q" keyCode={["KeyQ"]} width={"col-span-3"} />
        <Keycap centerLabel="W" keyCode={["KeyW"]} width={"col-span-3"} />
        <Keycap centerLabel="E" keyCode={["KeyE"]} width={"col-span-3"} />
        <Keycap centerLabel="R" keyCode={["KeyR"]} width={"col-span-3"} />
        <Keycap centerLabel="T" keyCode={["KeyT"]} width={"col-span-3"} />
        <Keycap centerLabel="Y" keyCode={["KeyY"]} width={"col-span-3"} />
        <Keycap centerLabel="U" keyCode={["KeyU"]} width={"col-span-3"} />
        <Keycap centerLabel="I" keyCode={["KeyI"]} width={"col-span-3"} />
        <Keycap centerLabel="O" keyCode={["KeyO"]} width={"col-span-3"} />
        <Keycap centerLabel="P" keyCode={["KeyP"]} width={"col-span-3"} />
        <Keycap
          centerLabel="["
          topLeftLabel="{"
          keyCode={["BracketLeft"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="]"
          topLeftLabel="}"
          keyCode={["BracketRight"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="\"
          topLeftLabel="|"
          keyCode={["Backslash"]}
          width={"col-span-7"}
        />
        <Keycap
          centerLabel="Caps lock"
          keyCode={["CapsLock"]}
          width={"col-span-7"}
        />
        <Keycap centerLabel="A" keyCode={["KeyA"]} width={"col-span-3"} />
        <Keycap centerLabel="S" keyCode={["KeyS"]} width={"col-span-3"} />
        <Keycap centerLabel="D" keyCode={["KeyD"]} width={"col-span-3"} />
        <Keycap centerLabel="F" keyCode={["KeyF"]} width={"col-span-3"} />
        <Keycap centerLabel="G" keyCode={["KeyG"]} width={"col-span-3"} />
        <Keycap centerLabel="H" keyCode={["KeyH"]} width={"col-span-3"} />
        <Keycap centerLabel="J" keyCode={["KeyJ"]} width={"col-span-3"} />
        <Keycap centerLabel="K" keyCode={["KeyK"]} width={"col-span-3"} />
        <Keycap centerLabel="L" keyCode={["KeyL"]} width={"col-span-3"} />
        <Keycap centerLabel=";" keyCode={["Semicolon"]} width={"col-span-3"} />
        <Keycap centerLabel="'" keyCode={["Quote"]} width={"col-span-3"} />
        <Keycap centerLabel="ENTER" keyCode={["Enter"]} width={"col-span-8"} />
        <Keycap
          centerLabel="SHIFT"
          keyCode={["ShiftLeft"]}
          width={"col-span-9"}
        />
        <Keycap centerLabel="Z" keyCode={["KeyZ"]} width={"col-span-3"} />
        <Keycap centerLabel="X" keyCode={["KeyX"]} width={"col-span-3"} />
        <Keycap centerLabel="C" keyCode={["KeyC"]} width={"col-span-3"} />
        <Keycap centerLabel="V" keyCode={["KeyV"]} width={"col-span-3"} />
        <Keycap centerLabel="B" keyCode={["KeyB"]} width={"col-span-3"} />
        <Keycap centerLabel="N" keyCode={["KeyN"]} width={"col-span-3"} />
        <Keycap centerLabel="M" keyCode={["KeyM"]} width={"col-span-3"} />
        <Keycap
          centerLabel=","
          topLeftLabel="<"
          keyCode={["Comma"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="."
          topLeftLabel=">"
          keyCode={["Period"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="/"
          topLeftLabel="?"
          keyCode={["Slash"]}
          width={"col-span-3"}
        />
        <Keycap
          centerLabel="SHIFT"
          keyCode={["ShiftRight"]}
          width={"col-span-9"}
        />
        <Keycap
          centerLabel="CTRL"
          keyCode={["ControlLeft"]}
          width={"col-span-5"}
        />
        <Keycap
          center={
            <img className="aspect-square h-8" src="/linux.svg" alt="linux" />
          }
          keyCode={["MetaLeft"]}
          width={"col-span-4"}
        />
        <Keycap centerLabel="ALT" keyCode={["AltLeft"]} width={"col-span-4"} />
        <Keycap centerLabel="" keyCode={["Space"]} width={"col-span-25"} />
        <Keycap centerLabel="ALT" keyCode={["AltRight"]} width={"col-span-5"} />
        <Keycap
          centerLabel="CTRL"
          keyCode={["ControlRight"]}
          width={"col-span-5"}
        />
      </div>
    </div>
  );
}
