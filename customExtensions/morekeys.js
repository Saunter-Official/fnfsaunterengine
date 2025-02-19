(function(Scratch) {
    'use strict';
  
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This example must run unsandboxed');
    }
  
    class WhenKeyPressed {
      getInfo() {
        return {
          id: 'morekeyseventsjulmik',
          name: 'More keys events',
          blocks: [
            {
              blockType: Scratch.BlockType.EVENT,
              opcode: 'whenPressed',
              text: 'when [KEY] key pressed',
              isEdgeActivated: false, // required boilerplate
              arguments: {
                KEY: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'key'
                }
              }
            }
          ],
          menus: {
            key: {
              acceptReporters: false,
              items: [
                {
                  // startHats filters by *value*, not by text
                  text: 'f1',
                  value: ' '
                },
                'f2',
                'f3',
                'f4',
                'f5',
                'f6',
                'f7',
                'f8',
                'f9',
                'f10',
                'f11',
                'f12',
                'alt',
                // ...
              ]
            }
          }
        };
      }
    }
  
    document.addEventListener('keydown', (e) => {
      Scratch.vm.runtime.startHats('eventexample2unsandboxed_whenPressed', {
        KEY: e.key
      });
    });
  
    Scratch.extensions.register(new WhenKeyPressed());
  })(Scratch);