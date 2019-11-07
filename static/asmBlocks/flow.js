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
    {
        "type": "start",
        "message0": "program start",
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "label_declare",
        "message0": "label %1",
        "args0": [
          {
            "type": "input_value",
            "name": "name",
            "check": "String"
          }
        ],
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "label_name",
        "message0": "label: %1",
        "args0": [
            {
            "type": "field_input",
            "name": "value",
            "text": ""
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
  ]);  // END JSON EXTRACT (Do not delete this comment.)