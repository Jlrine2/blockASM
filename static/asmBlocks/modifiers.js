goog.provide('Blockly.Blocks.colour');  // Deprecated
goog.provide('Blockly.Constants.Colour');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['COLOUR_HUE']. (2018 April 5)
 */
Blockly.Constants.Colour.HUE = 20;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // Block for mov op code.
    {
      "type": "mov",
      "message0": "mov %1 , %2",
      "args0": [
        {
          "type": "input_value",
          "name": "arg1"
        },
        {
          "type": "input_value",
          "name": "arg2"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "add",
      "message0": "add %1 , %2",
      "args0": [
        {
          "type": "input_value",
          "name": "arg1"
        },
        {
          "type": "input_value",
          "name": "arg2"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "sub",
      "message0": "sub %1 , %2",
      "args0": [
        {
          "type": "input_value",
          "name": "arg1"
        },
        {
          "type": "input_value",
          "name": "arg2"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "imul",
      "message0": "imul %1 , %2",
      "args0": [
        {
          "type": "input_value",
          "name": "arg1"
        },
        {
          "type": "input_value",
          "name": "arg2"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);  // END JSON EXTRACT (Do not delete this comment.)