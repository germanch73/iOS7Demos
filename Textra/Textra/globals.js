var morseTable = {
    'A': ".-",
    'B': "-...",
    'C': "-.-.",
    'D': "-..",
    'E': ".",
    'F': "..-.",
    'G': "--.",
    'H': "....",
    'I': "..",
    'J': ".---",
    'K': "-.-",
    'L': ".-..",
    'M': "--",
    'N': "-.",
    'O': "---",
    'P': ".--.",
    'Q': "--.-",
    'R': ".-.",
    'S': "...",
    'T': "-",
    'U': "..-",
    'V': "...-",
    'W': ".--",
    'X': "-..-",
    'Y': "-.--",
    'Z': "--..",
    '0': "-----",
    '1': ".----",
    '2': "..---",
    '3': "...--",
    '4': "....-",
    '5': ".....",
    '6': "-....",
    '7': "--...",
    '8': "---..",
    '9': "----.",
    '.': ".-.-.-",
    ',': "--..--",
    '?': "..--..",
    '=': "-...-"
};

var asciiTable = {
    ' ': "00100000",
    '!': "00100001",
    '"': "00100010",
    '#': "00100011",
    '$': "00100100",
    '%': "00100101",
    '&': "00100110",
    '\'': "00100111",
    '(': "00101000",
    ')': "00101001",
    '*': "00101010",
    '+': "00101011",
    ',': "00101100",
    '-': "00101101",
    '.': "00101110",
    '/': "00101111",
    '0': "00110000",
    '1': "00110001",
    '2': "00110010",
    '3': "00110011",
    '4': "00110100",
    '5': "00110101",
    '6': "00110110",
    '7': "00110111",
    '8': "00111000",
    '9': "00111001",
    ':': "00111010",
    ';': "00111011",
    '<': "00111100",
    '=': "00111101",
    '>': "00111110",
    '?': "00111111",
    '@': "01000000",
    'A': "01000001",
    'B': "01000010",
    'C': "01000011",
    'D': "01000100",
    'E': "01000101",
    'F': "01000110",
    'G': "01000111",
    'H': "01001000",
    'I': "01001001",
    'J': "01001010",
    'K': "01001011",
    'L': "01001100",
    'M': "01001101",
    'N': "01001110",
    'O': "01001111",
    'P': "01010000",
    'Q': "01010001",
    'R': "01010010",
    'S': "01010011",
    'T': "01010100",
    'U': "01010101",
    'V': "01010110",
    'W': "01010111",
    'X': "01011000",
    'Y': "01011001",
    'Z': "01011010",
    '[': "01011011",
    '\\': "01011100",
    ']': "01011101",
    '^': "01011110",
    '_': "01011111",
    '`': "01100000",
    'a': "01100001",
    'b': "01100010",
    'c': "01100011",
    'd': "01100100",
    'e': "01100101",
    'f': "01100110",
    'g': "01100111",
    'h': "01101000",
    'i': "01101001",
    'j': "01101010",
    'k': "01101011",
    'l': "01101100",
    'm': "01101101",
    'n': "01101110",
    'o': "01101111",
    'p': "01110000",
    'q': "01110001",
    'r': "01110010",
    's': "01110011",
    't': "01110100",
    'u': "01110101",
    'v': "01110110",
    'w': "01110111",
    'x': "01111000",
    'y': "01111001",
    'z': "01111010",
    '{': "01111011",
    '|': "01111100",
    '}': "01111101",
    '~': "01111110",
    '€': "10000000",
    ' ': "10000001",
    '‚': "10000010",
    'ƒ': "10000011",
    '„': "10000100",
    '…': "10000101",
    '†': "10000110",
    '‡': "10000111",
    'ˆ': "10001000",
    '‰': "10001001",
    'Š': "10001010",
    '‹': "10001011",
    'Œ': "10001100",
    ' ': "10001101",
    'Ž': "10001110",
    ' ': "10001111",
    ' ': "10010000",
    '‘': "10010001",
    '’': "10010010",
    '“': "10010011",
    '”': "10010100",
    '•': "10010101",
    '–': "10010110",
    '—': "10010111",
    '˜': "10011000",
    '™': "10011001",
    'š': "10011010",
    '›': "10011011",
    'œ': "10011100",
    ' ': "10011101",
    'ž': "10011110",
    'Ÿ': "10011111",
    ' ': "10100000",
    '¡': "10100001",
    '¢': "10100010",
    '£': "10100011",
    '¤': "10100100",
    '¥': "10100101",
    '¦': "10100110",
    '§': "10100111",
    '¨': "10101000",
    '©': "10101001",
    'ª': "10101010",
    '«': "10101011",
    '¬': "10101100",
    '®': "10101110",
    '¯': "10101111",
    '°': "10110000",
    '±': "10110001",
    '²': "10110010",
    '³': "10110011",
    '´': "10110100",
    'µ': "10110101",
    '¶': "10110110",
    '·': "10110111",
    '¸': "10111000",
    '¹': "10111001",
    'º': "10111010",
    '»': "10111011",
    '¼': "10111100",
    '½': "10111101",
    '¾': "10111110",
    '¿': "10111111",
    'À': "11000000",
    'Á': "11000001",
    'Â': "11000010",
    'Ã': "11000011",
    'Ä': "11000100",
    'Å': "11000101",
    'Æ': "11000110",
    'Ç': "11000111",
    'È': "11001000",
    'É': "11001001",
    'Ê': "11001010",
    'Ë': "11001011",
    'Ì': "11001100",
    'Í': "11001101",
    'Î': "11001110",
    'Ï': "11001111",
    'Ð': "11010000",
    'Ñ': "11010001",
    'Ò': "11010010",
    'Ó': "11010011",
    'Ô': "11010100",
    'Õ': "11010101",
    'Ö': "11010110",
    '×': "11010111",
    'Ø': "11011000",
    'Ù': "11011001",
    'Ú': "11011010",
    'Û': "11011011",
    'Ü': "11011100",
    'Ý': "11011101",
    'Þ': "11011110",
    'ß': "11011111",
    'à': "11100000",
    'á': "11100001",
    'â': "11100010",
    'ã': "11100011",
    'ä': "11100100",
    'å': "11100101",
    'æ': "11100110",
    'ç': "11100111",
    'è': "11101000",
    'é': "11101001",
    'ê': "11101010",
    'ë': "11101011",
    'ì': "11101100",
    'í': "11101101",
    'î': "11101110",
    'ï': "11101111",
    'ð': "11110000",
    'ñ': "11110001",
    'ò': "11110010",
    'ó': "11110011",
    'ô': "11110100",
    'õ': "11110101",
    'ö': "11110110",
    '÷': "11110111",
    'ø': "11111000",
    'ù': "11111001",
    'ú': "11111010",
    'û': "11111011",
    'ü': "11111100",
    'ý': "11111101",
    'þ': "11111110",
    'ÿ': "11111111",
};

var rot13Processor = function(input) {
    var output = "";
    for(i = 0; i < input.length; i++) {
        var ch = input.slice(i, i+1);
        var val = ch.charCodeAt(0);
        var convert = -1;
        if (val >= 65 && val <= 90) {
            convert = 65;
        } else if (val >= 97 && val <= 122) {
            convert = 97;
        }
        var rot = val;
        if (convert > 0) {
            var temp = val - convert;
            rot = (temp + 13) % 26;
            rot = rot + convert;
        }
        newChar = String.fromCharCode(rot);
        output = output + newChar;
    }
    return output;
}