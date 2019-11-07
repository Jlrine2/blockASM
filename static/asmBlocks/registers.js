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
        "type": "rax",
        "message0": "%1",
        "args0": [
          {
            "type": "field_label_serializable",
            "name": "reg_name",
            "text": "rax"
          }
        ],
        "output": "String",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rbx",
        "message0": "%1",
        "args0": [
          {
            "type": "field_label_serializable",
            "name": "reg_name",
            "text": "rbx"
          }
        ],
        "output": "String",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rcx",
        "message0": "%1",
        "args0": [
          {
            "type": "field_label_serializable",
            "name": "reg_name",
            "text": "rcx"
          }
        ],
        "output": "String",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rdi",
        "message0": "%1",
        "args0": [
          {
            "type": "field_label_serializable",
            "name": "reg_name",
            "text": "rax"
          }
        ],
        "output": "String",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rsp",
        "message0": "%1",
        "args0": [
          {
            "type": "field_label_serializable",
            "name": "reg_name",
            "text": "rsp"
          }
        ],
        "output": "String",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rsi",
        "message0": "%1",
        "args0": [
          {
            "type": "field_label_serializable",
            "name": "reg_name",
            "text": "rsi"
          }
        ],
        "output": "String",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
  ]);  // END JSON EXTRACT (Do not delete this comment.)