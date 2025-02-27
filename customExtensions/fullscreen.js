// Name: Browser Fullscreen
// ID: fullscreen0419
// Description: Enter and exit fullscreen mode.
// By: Veggiecan0419
// License: MIT

/* generated l10n code */Scratch.translate.setup({"de":{"_Browser Fullscreen":"Browser Vollbildmodus"},"fi":{"_Browser Fullscreen":"Selaimen koko näytön tila","_[ACTION] fullscreen":"kytke koko näytön tila [ACTION]","_enter":"päälle","_entered":"päälle","_exit":"pois päältä","_exited":"pois päältä","_in browser fullscreen?":"onko selaimen koko näytön tila päällä?","_when browser fullscreen [ENABLED]":"kun selaimen koko näytön tila kytketään [ENABLED]"},"it":{"_Browser Fullscreen":"Modalità Schermo Intero","_enter":"invio"},"ja":{"_Browser Fullscreen":"ブラウザフルスクリーン","_[ACTION] fullscreen":"フルスクリーン[ACTION]","_enter":"Enter","_entered":"に入った","_exit":"をやめる","_exited":"をやめた","_in browser fullscreen?":"ブラウザがフルスクリーン","_when browser fullscreen [ENABLED]":"ブラウザがフルスクリーン[ENABLED]とき"},"ko":{"_Browser Fullscreen":"브라우저 전체화면","_[ACTION] fullscreen":"전체화면 [ACTION]","_enter":"진입하기","_entered":"진입했을 때","_exit":"끝내기","_exited":"끝냈을 때","_in browser fullscreen?":"브라우저가 전체화면인가?","_when browser fullscreen [ENABLED]":"브라우저가 전체화면을 [ENABLED]"},"nb":{"_Browser Fullscreen":"Nettleser Fullskjerm","_enter":"skriv inn"},"nl":{"_Browser Fullscreen":"Browser-volledig scherm"},"ru":{"_Browser Fullscreen":"Полноэкранный Браузер","_[ACTION] fullscreen":"полный экран [ACTION]","_enter":"ввод","_entered":"вошёл","_exit":"выход","_exited":"вышел","_in browser fullscreen?":"браузер в полном экране?","_when browser fullscreen [ENABLED]":"когда браузер [ENABLED] полный экран"},"uk":{"_Browser Fullscreen":"Повноекранний Режим","_[ACTION] fullscreen":"[ACTION] повноекранний режим","_enter":"увімкнути","_entered":"увімкнено","_exit":"вимкнути","_exited":"вимкнено","_in browser fullscreen?":"на весь екран?","_when browser fullscreen [ENABLED]":"коли повноекранний режим [ENABLED]"},"zh-cn":{"_Browser Fullscreen":"全屏模式","_[ACTION] fullscreen":"[ACTION]全屏模式","_entered":"进入","_exit":"退出","_exited":"退出","_in browser fullscreen?":"浏览器全屏吗？","_when browser fullscreen [ENABLED]":"当[ENABLED]浏览器全屏"}});/* end generated l10n code */(function (Scratch) {
    "use strict";
    const icon =
      "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2My4yNjc0MiIgaGVpZ2h0PSI2My4xODQ5NSIgdmlld0JveD0iMCwwLDYzLjI2NzQyLDYzLjE4NDk1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA4LjM2NjI5LC0xNDguNDA3NTMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9IiIgZmlsbD0iI2ZmZDI0ZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9IiIgZmlsbD0iIzAxMDEwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9IiIgZmlsbD0iIzAxMDEwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9IiIgZmlsbD0iIzAxMDEwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9IiIgZmlsbD0iIzAxMDEwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9IiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9IiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9Ik0yNjkuNjMzNzEsMTgwYzAsMTYuMzQzNDcgLTEzLjI2NzQ3LDI5LjU5MjQ4IC0yOS42MzM3MSwyOS41OTI0OGMtMTYuMzY2MjUsMCAtMjkuNjMzNzEsLTEzLjI0OTAxIC0yOS42MzM3MSwtMjkuNTkyNDhjMCwtMTYuMzQzNDcgMTMuMjY3NDcsLTI5LjU5MjQ3IDI5LjYzMzcxLC0yOS41OTI0N2MxNi4zNjYyNSwwIDI5LjYzMzcxLDEzLjI0OSAyOS42MzM3MSwyOS41OTI0N3oiIGZpbGw9IiNmZmQyNGQiIHN0cm9rZT0iI2ZmZDI0ZCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGcgc3Ryb2tlLXdpZHRoPSI1Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiPjxwYXRoIGQ9Ik0yNjAuMjA3MDEsMTY3LjcwODg3YzAsMCAtMy43NDA3NSwtMS45MjU0NCAtNS4xOTI2MywtMi42NzI3NmMtMS4wNDg4LC0wLjUzOTg0IC0xLjQ3OTgyLC0wLjk5NjMxIC0xLjQ3OTgyLC0wLjk5NjMxbDYuNjgyMzksLTAuMjE1Njl6Ii8+PGc+PHBhdGggZD0iTTIyNy45OTM3NiwxOTYuMDEwNDFsMjQuMTE4NywtMzAuNTQ3OTdsMi4xODE5OSwxLjcyMjc2bC0yNC4xMTg3LDMwLjU0Nzk3eiIvPjxwYXRoIGQ9Ik0yNTguMTI3ODQsMTkyLjk2MTIybC0zNS4yMjk0OSwtMjUuMjk0NjZsMC45NzI4OCwtMS4zNTQ5OWwzNS4yMjk0OSwyNS4yOTQ2NnoiLz48cGF0aCBkPSJNMjI1LjM4ODcsMTYyLjM1NzIxYzAsMCAtMi42NzQ1NCwzLjQzOTM1IC0zLjcxMjYsNC43NzQyNWMtMC43NDk4NywwLjk2NDMgLTEuMjg3MzQsMS4zMDg5MSAtMS4yODczNCwxLjMwODkxbDEuMjA1MjksLTYuOTQ4OTZ6Ii8+PHBhdGggZD0iTTI1Ni4wOTcxMiwxOTUuNDE3NDFjMCwwIDMuMTk3ODMsLTIuOTU5MDkgNC40Mzg5OSwtNC4xMDc1OWMwLjg5NjU5LC0wLjgyOTY1IDEuNDgyOSwtMS4wODIzNSAxLjQ4MjksLTEuMDgyMzVsLTIuMzE4MzQsNi42NjA3OXoiLz48cGF0aCBkPSJNMjI1LjAzMDcxLDE5NS40MTMwN2MwLDAgMy42NDk1NiwyLjM3OTcxIDUuMDY2MDQsMy4zMDMzNGMxLjAyMzI0LDAuNjY3MjEgMS40MTEyOSwxLjE3NDIgMS40MTEyOSwxLjE3NDJsLTcuMDI1MDUsLTAuNjI0MXoiLz48L2c+PC9nPjxwYXRoIGQ9Ik0yMzIuOTYyNDgsMTgxLjk4NjUxbDcuMTQ2NjYsLTEwLjgyODAzbDEwLjY3MzM2LDcuMDQ0NTdsLTcuMTQ2NjYsMTAuODI4MDN6IiBmaWxsPSIjZmZkMjRkIiBzdHJva2U9Im5vbmUiLz48L2c+PC9nPjwvZz48L3N2Zz4=";
  
    const isFullscreenEnabled = () => {
      if (typeof document.fullscreenElement !== "undefined") {
        return document.fullscreenElement !== null;
      }
      if (typeof document.webkitFullscreenElement !== "undefined") {
        return document.webkitFullscreenElement !== null;
      }
      return false;
    };
  
    const enterFullscreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    };
  
    const exitFullscreen = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    };
  
    const onFullScreenChange = () => {
      Scratch.vm.runtime.startHats("fullscreen0419_whenfullscreen", {
        ENABLED: isFullscreenEnabled() ? "entered" : "exited",
      });
    };
    window.addEventListener("fullscreenchange", onFullScreenChange);
    window.addEventListener("webkitfullscreenchange", onFullScreenChange);
  
    class FullscreenExtension {
      getInfo() {
        return {
          id: "fullscreen0419",
          color1: "#F39016",
          color2: "#C77612",
          color3: "#9D5D0E",
          blockIconURI: icon,
          name: Scratch.translate("Browser Fullscreen"),
          blocks: [
            {
              opcode: "fullscreen",
              blockType: Scratch.BlockType.COMMAND,
              text: Scratch.translate("[ACTION] fullscreen"),
              arguments: {
                ACTION: {
                  type: Scratch.ArgumentType.STRING,
                  menu: "fullscreenMenu",
                  defaultValue: "enter",
                },
              },
            },
            {
              opcode: "isInFullscreen",
              blockType: Scratch.BlockType.BOOLEAN,
              text: Scratch.translate("in browser fullscreen?"),
              arguments: {},
            },
            {
              opcode: "whenfullscreen",
              blockType: Scratch.BlockType.EVENT,
              text: Scratch.translate("when browser fullscreen [ENABLED]"),
              isEdgeActivated: false,
              arguments: {
                ENABLED: {
                  type: Scratch.ArgumentType.STRING,
                  menu: "whenfullscreenMenu",
                },
              },
            },
          ],
          menus: {
            fullscreenMenu: {
              acceptReporters: true,
              items: [
                {
                  text: Scratch.translate("enter"),
                  value: "enter",
                },
                {
                  text: Scratch.translate("exit"),
                  value: "exit",
                },
              ],
            },
            whenfullscreenMenu: {
              // Used for startHats filtering.
              acceptReporters: false,
              items: [
                {
                  text: Scratch.translate("entered"),
                  value: "entered",
                },
                {
                  text: Scratch.translate("exited"),
                  value: "exited",
                },
              ],
            },
          },
        };
      }
      fullscreen(args) {
        const action = Scratch.Cast.toString(args.ACTION).toLowerCase();
        if (action === "enter" && !isFullscreenEnabled()) {
          enterFullscreen();
        } else if (action === "exit" && isFullscreenEnabled()) {
          exitFullscreen();
        }
      }
      isInFullscreen() {
        return isFullscreenEnabled();
      }
    }
  
    Scratch.extensions.register(new FullscreenExtension());
  })(Scratch);