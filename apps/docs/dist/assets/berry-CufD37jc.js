const e=Object.freeze(JSON.parse(`{"displayName":"Berry","name":"berry","patterns":[{"include":"#controls"},{"include":"#strings"},{"include":"#comment-block"},{"include":"#comments"},{"include":"#keywords"},{"include":"#function"},{"include":"#member"},{"include":"#identifier"},{"include":"#number"},{"include":"#operator"}],"repository":{"comment-block":{"begin":"#-","end":"-#","name":"comment.berry","patterns":[{}]},"comments":{"begin":"#","end":"\\\\n","name":"comment.line.berry","patterns":[{}]},"controls":{"patterns":[{"match":"\\\\b(if|elif|else|for|while|do|end|break|continue|return|try|except|raise)\\\\b","name":"keyword.control.berry"}]},"function":{"patterns":[{"match":"\\\\b([a-zA-Z_][a-zA-Z0-9_]*(?=\\\\s*\\\\())","name":"entity.name.function.berry"}]},"identifier":{"patterns":[{"match":"\\\\b[_A-Za-z]\\\\w+\\\\b","name":"identifier.berry"}]},"keywords":{"patterns":[{"match":"\\\\b(var|static|def|class|true|false|nil|self|super|import|as|_class)\\\\b","name":"keyword.berry"}]},"member":{"patterns":[{"captures":{"0":{"name":"entity.other.attribute-name.berry"}},"match":"\\\\.([a-zA-Z_][a-zA-Z0-9_]*)"}]},"number":{"patterns":[{"match":"0x\\\\h+|\\\\d+|(\\\\d+\\\\.?|\\\\.\\\\d)\\\\d*([eE][+\\\\-]?\\\\d+)?","name":"constant.numeric.berry"}]},"operator":{"patterns":[{"match":"[()\\\\[\\\\].\\\\-!~*/%+\\\\&\\\\^|<>=:]","name":"keyword.operator.berry"}]},"strings":{"patterns":[{"begin":"([\\"'])","end":"\\\\1","name":"string.quoted.double.berry","patterns":[{"match":"(\\\\\\\\x\\\\h{2})|(\\\\\\\\[0-7]{3})|(\\\\\\\\\\\\\\\\)|(\\\\\\\\\\")|(\\\\\\\\')|(\\\\\\\\a)|(\\\\\\\\b)|(\\\\\\\\f)|(\\\\\\\\n)|(\\\\\\\\r)|(\\\\\\\\t)|(\\\\\\\\v)","name":"constant.character.escape.berry"}]},{"begin":"f([\\"'])","end":"\\\\1","name":"string.quoted.other.berry","patterns":[{"match":"(\\\\\\\\x\\\\h{2})|(\\\\\\\\[0-7]{3})|(\\\\\\\\\\\\\\\\)|(\\\\\\\\\\")|(\\\\\\\\')|(\\\\\\\\a)|(\\\\\\\\b)|(\\\\\\\\f)|(\\\\\\\\n)|(\\\\\\\\r)|(\\\\\\\\t)|(\\\\\\\\v)","name":"constant.character.escape.berry"},{"match":"\\\\{\\\\{[^}]*}}","name":"string.quoted.other.berry"},{"begin":"\\\\{","end":"}","name":"keyword.other.unit.berry","patterns":[{"include":"#keywords"},{"include":"#numbers"},{"include":"#identifier"},{"include":"#operator"},{"include":"#member"},{"include":"#function"}]}]}]}},"scopeName":"source.berry","aliases":["be"]}`)),r=[e];export{r as default};
//# sourceMappingURL=berry-CufD37jc.js.map
