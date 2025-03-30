const e=Object.freeze(JSON.parse(`{"displayName":"Mermaid","fileTypes":[],"injectionSelector":"L:text.html.markdown","name":"mermaid","patterns":[{"include":"#mermaid-code-block"},{"include":"#mermaid-code-block-with-attributes"},{"include":"#mermaid-ado-code-block"}],"repository":{"mermaid":{"patterns":[{"begin":"^\\\\s*(architecture-beta)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"4":{"name":"string"},"5":{"name":"keyword.control.mermaid"},"6":{"name":"string"},"7":{"name":"punctuation.definition.typeparameters.end.mermaid"},"8":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"9":{"name":"string"},"10":{"name":"punctuation.definition.typeparameters.end.mermaid"},"11":{"name":"keyword.control.mermaid"},"12":{"name":"variable"}},"match":"(?i)\\\\s*(group|service)\\\\s+([\\\\w\\\\-]+)\\\\s*(\\\\()?([\\\\w\\\\s\\\\-]+)?(:)?([\\\\w\\\\s\\\\-]+)?(\\\\))?\\\\s*(\\\\[)?([\\\\w\\\\s\\\\-]+)?\\\\s*(])?\\\\s*(in)?\\\\s*([\\\\w\\\\-]+)?"},{"captures":{"1":{"name":"variable"},"2":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"3":{"name":"variable"},"4":{"name":"punctuation.definition.typeparameters.end.mermaid"},"5":{"name":"keyword.control.mermaid"},"6":{"name":"entity.name.function.mermaid"},"7":{"name":"keyword.control.mermaid"},"8":{"name":"entity.name.function.mermaid"},"9":{"name":"keyword.control.mermaid"},"10":{"name":"variable"},"11":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"12":{"name":"variable"},"13":{"name":"punctuation.definition.typeparameters.end.mermaid"}},"match":"(?i)\\\\s*([\\\\w\\\\-]+)\\\\s*(\\\\{)?\\\\s*(group)?(})?\\\\s*(:)\\\\s*([TBLR])\\\\s+(<?-->?)\\\\s+([TBLR])\\\\s*(:)\\\\s*([\\\\w\\\\-]+)\\\\s*(\\\\{)?\\\\s*(group)?(})?"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"variable"}},"match":"(?i)\\\\s*(junction)\\\\s+([\\\\w\\\\-]+)\\\\s*(in)?\\\\s*([\\\\w\\\\-]+)?"}]},{"begin":"^\\\\s*(classDiagram)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"captures":{"1":{"name":"entity.name.type.class.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"keyword.control.mermaid"},"5":{"name":"entity.name.type.class.mermaid"},"6":{"name":"keyword.control.mermaid"},"7":{"name":"string"}},"match":"(?i)([\\\\w\\\\-]+)\\\\s(\\"(?:\\\\d+|\\\\*|0..\\\\d+|1..\\\\d+|1..\\\\*)\\")?\\\\s?(--o|--\\\\*|<--|-->|<\\\\.\\\\.|\\\\.\\\\.>|<\\\\|\\\\.\\\\.|\\\\.\\\\.\\\\|>|<\\\\|--|--\\\\|>|--\\\\*|--|\\\\.\\\\.|\\\\*--|o--)\\\\s(\\"(?:\\\\d+|\\\\*|0..\\\\d+|1..\\\\d+|1..\\\\*)\\")?\\\\s?([\\\\w\\\\-]+)\\\\s?(:)?\\\\s(.*)$"},{"captures":{"1":{"name":"entity.name.type.class.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"entity.name.function.mermaid"},"5":{"name":"punctuation.parenthesis.open.mermaid"},"6":{"name":"storage.type.mermaid"},"7":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"8":{"name":"storage.type.mermaid"},"9":{"name":"punctuation.definition.typeparameters.end.mermaid"},"10":{"name":"entity.name.variable.parameter.mermaid"},"11":{"name":"punctuation.parenthesis.closed.mermaid"},"12":{"name":"keyword.control.mermaid"},"13":{"name":"storage.type.mermaid"},"14":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"15":{"name":"storage.type.mermaid"},"16":{"name":"punctuation.definition.typeparameters.end.mermaid"}},"match":"(?i)([\\\\w\\\\-]+)\\\\s?(:)\\\\s([+~#\\\\-])?([\\\\w\\\\-]+)(\\\\()([\\\\w\\\\-]+)?(~)?([\\\\w\\\\-]+)?(~)?\\\\s?([\\\\w\\\\-]+)?(\\\\))([*$]{0,2})\\\\s?([\\\\w\\\\-]+)?(~)?([\\\\w\\\\-]+)?(~)?$"},{"captures":{"1":{"name":"entity.name.type.class.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"storage.type.mermaid"},"5":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"6":{"name":"storage.type.mermaid"},"7":{"name":"punctuation.definition.typeparameters.end.mermaid"},"8":{"name":"entity.name.variable.field.mermaid"}},"match":"(?i)([\\\\w\\\\-]+)\\\\s?(:)\\\\s([+~#\\\\-])?([\\\\w\\\\-]+)(~)?([\\\\w\\\\-]+)?(~)?\\\\s([\\\\w\\\\-]+)?$"},{"captures":{"1":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"2":{"name":"storage.type.mermaid"},"3":{"name":"punctuation.definition.typeparameters.end.mermaid"},"4":{"name":"entity.name.type.class.mermaid"}},"match":"(?i)(<<)([\\\\w\\\\-]+)(>>)\\\\s?([\\\\w\\\\-]+)?"},{"begin":"(?i)(class)\\\\s+([\\\\w\\\\-]+)(~)?([\\\\w\\\\-]+)?(~)?\\\\s?(\\\\{)","beginCaptures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.type.class.mermaid"},"3":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"4":{"name":"storage.type.mermaid"},"5":{"name":"punctuation.definition.typeparameters.end.mermaid"},"6":{"name":"keyword.control.mermaid"}},"end":"(})","endCaptures":{"1":{"name":"keyword.control.mermaid"}},"patterns":[{"match":"%%.*","name":"comment"},{"begin":"(?i)\\\\s([+~#\\\\-])?([\\\\w\\\\-]+)(\\\\()","beginCaptures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.function.mermaid"},"3":{"name":"punctuation.parenthesis.open.mermaid"}},"end":"(?i)(\\\\))([*$]{0,2})\\\\s?([\\\\w\\\\-]+)?(~)?([\\\\w\\\\-]+)?(~)?$","endCaptures":{"1":{"name":"punctuation.parenthesis.closed.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"storage.type.mermaid"},"4":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"5":{"name":"storage.type.mermaid"},"6":{"name":"punctuation.definition.typeparameters.end.mermaid"}},"patterns":[{"captures":{"1":{"name":"storage.type.mermaid"},"2":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"3":{"name":"storage.type.mermaid"},"4":{"name":"punctuation.definition.typeparameters.end.mermaid"},"5":{"name":"entity.name.variable.parameter.mermaid"}},"match":"(?i)\\\\s*,?\\\\s*([\\\\w\\\\-]+)?(~)?([\\\\w\\\\-]+)?(~)?\\\\s?([\\\\w\\\\-]+)?"}]},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"storage.type.mermaid"},"3":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"4":{"name":"storage.type.mermaid"},"5":{"name":"punctuation.definition.typeparameters.end.mermaid"},"6":{"name":"entity.name.variable.field.mermaid"}},"match":"(?i)\\\\s([+~#\\\\-])?([\\\\w\\\\-]+)(~)?([\\\\w\\\\-]+)?(~)?\\\\s([\\\\w\\\\-]+)?$"},{"captures":{"1":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"2":{"name":"storage.type.mermaid"},"3":{"name":"punctuation.definition.typeparameters.end.mermaid"},"4":{"name":"entity.name.type.class.mermaid"}},"match":"(?i)(<<)([\\\\w\\\\-]+)(>>)\\\\s?([\\\\w\\\\-]+)?"}]},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.type.class.mermaid"},"3":{"name":"punctuation.definition.typeparameters.begin.mermaid"},"4":{"name":"storage.type.mermaid"},"5":{"name":"punctuation.definition.typeparameters.end.mermaid"}},"match":"(?i)(class)\\\\s+([\\\\w\\\\-]+)(~)?([\\\\w\\\\-]+)?(~)?"}]},{"begin":"^\\\\s*(erDiagram)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"captures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"string"},"4":{"name":"keyword.control.mermaid"}},"match":"(?i)^\\\\s*([\\\\w\\\\-]+)\\\\s*(\\\\[)?\\\\s*([\\\\w\\\\-]+|\\"[\\\\w\\\\s\\\\-]+\\")?\\\\s*(])?$"},{"begin":"(?i)\\\\s+([\\\\w\\\\-]+)\\\\s*(\\\\[)?\\\\s*([\\\\w\\\\-]+|\\"[\\\\w\\\\s\\\\-]+\\")?\\\\s*(])?\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"string"},"4":{"name":"keyword.control.mermaid"},"5":{"name":"keyword.control.mermaid"}},"end":"(})","endCaptures":{"1":{"name":"keyword.control.mermaid"}},"patterns":[{"captures":{"1":{"name":"storage.type.mermaid"},"2":{"name":"variable"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"string"}},"match":"(?i)\\\\s*([\\\\w\\\\-]+)\\\\s+([\\\\w\\\\-]+)\\\\s+(PK|FK)?\\\\s*(\\"[\\"($\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*\\")?\\\\s*"},{"match":"%%.*","name":"comment"}]},{"captures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"variable"},"4":{"name":"keyword.control.mermaid"},"5":{"name":"string"}},"match":"(?i)\\\\s*([\\\\w\\\\-]+)\\\\s*((?:\\\\|o|\\\\|\\\\||}o|}\\\\||one or (?:zero|more|many)|zero or (?:one|more|many)|many\\\\([01]\\\\)|only one|0\\\\+|1\\\\+?)(?:..|--)(?:o\\\\||\\\\|\\\\||o\\\\{|\\\\|\\\\{|one or (?:zero|more|many)|zero or (?:one|more|many)|many\\\\([01]\\\\)|only one|0\\\\+|1\\\\+?))\\\\s*([\\\\w\\\\-]+)\\\\s*(:)\\\\s*(\\"[\\\\w\\\\s]*\\"|[\\\\w\\\\-]+)"}]},{"begin":"^\\\\s*(gantt)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.function.mermaid"}},"match":"(?i)^\\\\s*(dateFormat)\\\\s+([\\\\w\\\\-.]+)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.function.mermaid"}},"match":"(?i)^\\\\s*(axisFormat)\\\\s+([\\\\w%/\\\\\\\\\\\\-.]+)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)(tickInterval)\\\\s+(([1-9][0-9]*)(millisecond|second|minute|hour|day|week|month))"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)^\\\\s*(title)\\\\s+(\\\\s*[\\"()$\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)^\\\\s*(excludes)\\\\s+((?:[\\\\d\\\\-,\\\\s]|monday|tuesday|wednesday|thursday|friday|saturday|sunday|weekends)+)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)^\\\\s+(todayMarker)\\\\s+(.*)$"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)^\\\\s*(section)\\\\s+(\\\\s*[\\"()$\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)"},{"begin":"(?i)^\\\\s(.*)(:)","beginCaptures":{"1":{"name":"string"},"2":{"name":"keyword.control.mermaid"}},"end":"$","patterns":[{"match":"(crit|done|active|after)","name":"entity.name.function.mermaid"},{"match":"%%.*","name":"comment"}]}]},{"begin":"^\\\\s*(gitGraph)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"begin":"(?i)^\\\\s*(commit)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"$","patterns":[{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"string"}},"match":"(?i)\\\\s*(id)(:)\\\\s?(\\"[^\\"\\\\n]*\\")"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"entity.name.function.mermaid"}},"match":"(?i)\\\\s*(type)(:)\\\\s?(NORMAL|REVERSE|HIGHLIGHT)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"string"}},"match":"(?i)\\\\s*(tag)(:)\\\\s?(\\"[($\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*\\")"}]},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"}},"match":"(?i)^\\\\s*(checkout)\\\\s*([^\\\\s\\"]*)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"keyword.control.mermaid"},"5":{"name":"constant.numeric.decimal.mermaid"}},"match":"(?i)^\\\\s*(branch)\\\\s*([^\\\\s\\"]*)\\\\s*(?:(order)(:)\\\\s?(\\\\d+))?"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"keyword.control.mermaid"},"5":{"name":"string"}},"match":"(?i)^\\\\s*(merge)\\\\s*([^\\\\s\\"]*)\\\\s*(?:(tag)(:)\\\\s?(\\"[^\\"\\\\n]*\\"))?"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"string"}},"match":"(?i)^\\\\s*(cherry-pick)\\\\s+(id)(:)\\\\s*(\\"[^\\"\\\\n]*\\")"}]},{"begin":"^\\\\s*(graph|flowchart)\\\\s+([\\\\p{L} 0-9]+)","beginCaptures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.function.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"string"},"5":{"name":"keyword.control.mermaid"}},"match":"(?i)^\\\\s*(subgraph)\\\\s+(\\\\w+)(\\\\[)(\\"?[\\\\w\\\\s*+%=\\\\\\\\/:.\\\\-'\`,\\\\&\\\\^#$!?<>]*\\"?)(])"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.function.mermaid"}},"match":"^\\\\s*(subgraph)\\\\s+([\\\\p{L} 0-9<>]+)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.function.mermaid"}},"match":"^(?i)\\\\s*(direction)\\\\s+(RB|BT|RL|TD|LR)"},{"match":"\\\\b(end)\\\\b","name":"keyword.control.mermaid"},{"begin":"(?i)(\\\\b(?:(?!--|==)[\\\\-\\\\w])+\\\\b\\\\s*)(\\\\(\\\\[|\\\\[\\\\[|\\\\[\\\\(|\\\\[|\\\\(+|[>{]|\\\\(\\\\()","beginCaptures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"string"}},"end":"(?i)(]\\\\)|]]|\\\\)]|]|\\\\)+|}|\\\\)\\\\))","endCaptures":{"1":{"name":"keyword.control.mermaid"}},"patterns":[{"begin":"\\\\s*(\\")","beginCaptures":{"1":{"name":"string"}},"end":"(\\")","endCaptures":{"1":{"name":"string"}},"patterns":[{"begin":"(?i)([^\\"]*)","beginCaptures":{"1":{"name":"string"}},"end":"(?=\\")","patterns":[{"captures":{"1":{"name":"comment"}},"match":"([^\\"]*)"}]}]},{"captures":{"1":{"name":"string"}},"match":"(?i)\\\\s*([$\\\\&%\\\\^/#.,?!;:*+<>_'\\\\\\\\\\\\w\\\\s]+)"}]},{"begin":"(?i)\\\\s*((?:-{2,5}|={2,5})[xo>]?\\\\|)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(?i)(\\\\|)","endCaptures":{"1":{"name":"keyword.control.mermaid"}},"patterns":[{"begin":"\\\\s*(\\")","beginCaptures":{"1":{"name":"string"}},"end":"(\\")","endCaptures":{"1":{"name":"string"}},"patterns":[{"begin":"(?i)([^\\"]*)","beginCaptures":{"1":{"name":"string"}},"end":"(?=\\")","patterns":[{"captures":{"1":{"name":"comment"}},"match":"([^\\"]*)"}]}]},{"captures":{"1":{"name":"string"}},"match":"(?i)\\\\s*([$\\\\&%\\\\^/#.,?!;:*+<>_'\\\\\\\\\\\\w\\\\s]+)"}]},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"},"3":{"name":"keyword.control.mermaid"}},"match":"(?i)\\\\s*([xo<]?(?:-{2,5}|={2,5}|-\\\\.{1,3}|-\\\\.))((?:(?!--|==)[\\\\w\\\\s*+%=\\\\\\\\/:.\\\\-'\`,\\"\\\\&\\\\^#$!?<>\\\\[\\\\]])*)((?:-{2,5}|={2,5}|\\\\.{1,3}-|\\\\.-)[xo>]?)"},{"captures":{"1":{"name":"keyword.control.mermaid"}},"match":"(?i)\\\\s*([ox<]?(?:-.{1,3}-|-{1,3}|={1,3})[ox>]?)"},{"match":"(\\\\b(?:(?!--|==)[\\\\-\\\\w])+\\\\b\\\\s*)","name":"variable"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"string"}},"match":"(?i)\\\\s*(class)\\\\s+(\\\\b[\\\\-,\\\\w]+)\\\\s+(\\\\b\\\\w+\\\\b)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"string"}},"match":"(?i)\\\\s*(classDef)\\\\s+(\\\\b\\\\w+\\\\b)\\\\s+(\\\\b[\\\\-,:;#\\\\w]+)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"variable"},"4":{"name":"string"}},"match":"(?i)\\\\s*(click)\\\\s+(\\\\b[\\\\-\\\\w]+\\\\b\\\\s*)(\\\\b\\\\w+\\\\b)?\\\\s(\\"*.*\\")"}]},{"begin":"^\\\\s*(pie)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)^\\\\s*(title)\\\\s+(\\\\s*[\\"()$\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)"},{"begin":"(?i)\\\\s(.*)(:)","beginCaptures":{"1":{"name":"string"},"2":{"name":"keyword.control.mermaid"}},"end":"$","patterns":[{"match":"%%.*","name":"comment"}]}]},{"begin":"^\\\\s*(quadrantChart)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)^\\\\s*(title)\\\\s*([\\"()$\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)"},{"begin":"(?i)^\\\\s*([xy]-axis)\\\\s+((?:(?!-->)[$\\\\&%/#.,?!*+='\\\\\\\\\\\\-\\\\w\\\\s])*)","beginCaptures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"end":"$","patterns":[{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)\\\\s*(-->)\\\\s*([$\\\\&%/#.,?!*+='\\\\\\\\\\\\-\\\\w\\\\s]*)"}]},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)^\\\\s*(quadrant-[1234])\\\\s*([\\"()$\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)"},{"captures":{"1":{"name":"string"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"constant.numeric.decimal.mermaid"},"5":{"name":"keyword.control.mermaid"},"6":{"name":"constant.numeric.decimal.mermaid"},"7":{"name":"keyword.control.mermaid"}},"match":"(?i)\\\\s*([$\\\\&%/#.,?!*+='\\\\\\\\\\\\-\\\\w\\\\s]*)\\\\s*(:)\\\\s*(\\\\[)\\\\s*(\\\\d\\\\.\\\\d+)\\\\s*(,)\\\\s*(\\\\d\\\\.\\\\d+)\\\\s*(])"}]},{"begin":"^\\\\s*(requirementDiagram)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"begin":"(?i)^\\\\s*((?:functional|interface|performance|physical)?requirement|designConstraint)\\\\s*([\\"()$\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"keyword.control.mermaid"}},"end":"(?i)\\\\s*(})","endCaptures":{"1":{"name":"keyword.control.mermaid"}},"patterns":[{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"}},"match":"(?i)\\\\s*(id:)\\\\s*([$\\\\&%\\\\^/#.,?!;:*+<>_'\\\\\\\\\\\\w\\\\s]+)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)\\\\s*(text:)\\\\s*([$\\\\&%\\\\^/#.,?!;:*+<>_'\\\\\\\\\\\\w\\\\s]+)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.function.mermaid"}},"match":"(?i)\\\\s*(risk:)\\\\s*(low|medium|high)\\\\s*$"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.function.mermaid"}},"match":"(?i)\\\\s*(verifymethod:)\\\\s*(analysis|inspection|test|demonstration)\\\\s*$"}]},{"begin":"(?i)^\\\\s*(element)\\\\s*([\\"()$\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"keyword.control.mermaid"}},"end":"(?i)\\\\s*(})","endCaptures":{"1":{"name":"keyword.control.mermaid"}},"patterns":[{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"}},"match":"(?i)\\\\s*(type:)\\\\s*([\\"$\\\\&%\\\\^/#.,?!;:*+<>_'\\\\\\\\\\\\w\\\\s]+)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"}},"match":"(?i)\\\\s*(docref:)\\\\s*([$\\\\&%\\\\^/#.,?!;:*+<>_'\\\\\\\\\\\\w\\\\s]+)"}]},{"captures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"keyword.control.mermaid"},"5":{"name":"variable"}},"match":"(?i)^\\\\s*(\\\\w+)\\\\s*(-)\\\\s*(contains|copies|derives|satisfies|verifies|refines|traces)\\\\s*(->)\\\\s*(\\\\w+)\\\\s*$"},{"captures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"keyword.control.mermaid"},"5":{"name":"variable"}},"match":"(?i)^\\\\s*(\\\\w+)\\\\s*(<-)\\\\s*(contains|copies|derives|satisfies|verifies|refines|traces)\\\\s*(-)\\\\s*(\\\\w+)\\\\s*$"}]},{"begin":"^\\\\s*(sequenceDiagram)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"(%%|#).*","name":"comment"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"string"}},"match":"(?i)(title)\\\\s*(:)?\\\\s+(\\\\s*[\\"()$\\\\&%\\\\^/#.,?!:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"string"}},"match":"(?i)\\\\s*(participant|actor)\\\\s+((?:(?! as )[\\"()$\\\\&%\\\\^/#.?!*=<>'\\\\\\\\\\\\w\\\\s])+)\\\\s*(as)?\\\\s([\\"()$\\\\&%\\\\^/#.,?!*=<>'\\\\\\\\\\\\w\\\\s]+)?"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"}},"match":"(?i)\\\\s*((?:de)?activate)\\\\s+(\\\\b[\\"()$\\\\&%\\\\^/#.?!*=<>'\\\\\\\\\\\\w\\\\s]+\\\\b\\\\)?\\\\s*)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.function.mermaid"},"3":{"name":"variable"},"4":{"name":"keyword.control.mermaid"},"5":{"name":"variable"},"6":{"name":"keyword.control.mermaid"},"7":{"name":"string"}},"match":"(?i)\\\\s*(Note)\\\\s+((?:left|right)\\\\sof|over)\\\\s+(\\\\b[\\"()$\\\\&%\\\\^/#.?!*=<>'\\\\\\\\\\\\w\\\\s]+\\\\b\\\\)?\\\\s*)(,)?(\\\\b[\\"()$\\\\&%\\\\^/#.?!*=<>'\\\\\\\\\\\\w\\\\s]+\\\\b\\\\)?\\\\s*)?(:)(?:\\\\s+([^;#]*))?"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)\\\\s*(loop)(?:\\\\s+([^;#]*))?"},{"captures":{"1":{"name":"keyword.control.mermaid"}},"match":"\\\\s*(end)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)\\\\s*(alt|else|option|par|and|rect|autonumber|critical|opt)(?:\\\\s+([^#;]*))?$"},{"captures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"variable"},"4":{"name":"keyword.control.mermaid"},"5":{"name":"string"}},"match":"(?i)\\\\s*(\\\\b[\\"()$\\\\&%\\\\^/#.?!*=<>'\\\\\\\\\\\\w\\\\s]+\\\\b\\\\)?)\\\\s*(-?-[>x)]>?[+\\\\-]?)\\\\s*([\\"()$\\\\&%\\\\^/#.?!*=<>'\\\\\\\\\\\\w\\\\s]+\\\\b\\\\)?)\\\\s*(:)\\\\s*([^;#]*)"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"entity.name.function.mermaid"},"3":{"name":"string"}},"match":"(?i)\\\\s*(box)\\\\s+(transparent)(?:\\\\s+([^;#]*))?"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)\\\\s*(box)(?:\\\\s+([^;#]*))?"}]},{"begin":"^\\\\s*(stateDiagram(?:-v2)?)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"captures":{"1":{"name":"keyword.control.mermaid"}},"match":"\\\\s+(})\\\\s+"},{"captures":{"1":{"name":"keyword.control.mermaid"}},"match":"\\\\s+(--)\\\\s+"},{"match":"^\\\\s*([\\\\w\\\\-]+)$","name":"variable"},{"captures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"string"}},"match":"(?i)([\\\\w\\\\-]+)\\\\s+(:)\\\\s+(\\\\s*[\\\\-\\\\w\\\\s]+\\\\b)"},{"begin":"(?i)^\\\\s*(state)\\\\s+","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"$","patterns":[{"captures":{"1":{"name":"string"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"variable"}},"match":"(?i)\\\\s*(\\"[\\\\-\\\\w\\\\s]+\\\\b\\")\\\\s+(as)\\\\s+([\\\\w\\\\-]+)"},{"captures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"}},"match":"(?i)\\\\s*([\\\\w\\\\-]+)\\\\s+(\\\\{)"},{"captures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"}},"match":"(?i)\\\\s*([\\\\w\\\\-]+)\\\\s+(<<(?:fork|join)>>)"}]},{"begin":"(?i)([\\\\w\\\\-]+)\\\\s+(-->)","beginCaptures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"}},"end":"$","patterns":[{"captures":{"1":{"name":"variable"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"string"}},"match":"(?i)\\\\s+([\\\\w\\\\-]+)\\\\s*(:)?\\\\s*([^\\\\n:]+)?"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"string"}},"match":"(?i)(\\\\[\\\\*])\\\\s*(:)?\\\\s*([^\\\\n:]+)?"}]},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"variable"},"4":{"name":"keyword.control.mermaid"},"5":{"name":"string"}},"match":"(?i)(\\\\[\\\\*])\\\\s+(-->)\\\\s+([\\\\w\\\\-]+)\\\\s*(:)?\\\\s*([^\\\\n:]+)?"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"},"3":{"name":"keyword.control.mermaid"},"4":{"name":"string"}},"match":"(?i)^\\\\s*(note (?:left|right) of)\\\\s+([\\\\w\\\\-]+)\\\\s+(:)\\\\s*([^\\\\n:]+)"},{"begin":"(?i)^\\\\s*(note (?:left|right) of)\\\\s+([\\\\w\\\\-]+)(.|\\\\n)","beginCaptures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"variable"}},"contentName":"string","end":"(?i)(end note)","endCaptures":{"1":{"name":"keyword.control.mermaid"}}}]},{"begin":"^\\\\s*(journey)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)^\\\\s*(title|section)\\\\s+(\\\\s*[\\"()$\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)"},{"begin":"(?i)\\\\s*([\\"()$\\\\&%\\\\^/.,?!*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)\\\\s*(:)\\\\s*(\\\\d+)\\\\s*(:)","beginCaptures":{"1":{"name":"string"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"constant.numeric.decimal.mermaid"},"4":{"name":"keyword.control.mermaid"}},"end":"$","patterns":[{"captures":{"1":{"name":"variable"}},"match":"(?i)\\\\s*,?\\\\s*([^,#\\\\n]+)"}]}]},{"begin":"^\\\\s*(xychart(?:-beta)?(?:\\\\s+horizontal)?)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"(^|\\\\G)(?=\\\\s*[\`:~]{3,}\\\\s*$)","patterns":[{"match":"%%.*","name":"comment"},{"captures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"string"}},"match":"(?i)^\\\\s*(title)\\\\s+(\\\\s*[\\"()$\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*)"},{"begin":"(?i)^\\\\s*(x-axis)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"$","patterns":[{"captures":{"1":{"name":"constant.numeric.decimal.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"constant.numeric.decimal.mermaid"}},"match":"(?i)\\\\s*([\\\\-+]?\\\\d+\\\\.?\\\\d*)\\\\s*(-->)\\\\s*([\\\\-+]?\\\\d+\\\\.?\\\\d*)"},{"captures":{"1":{"name":"string"}},"match":"(?i)\\\\s+(\\"[($\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*\\")"},{"captures":{"1":{"name":"string"}},"match":"(?i)\\\\s+([($\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w]*)"},{"begin":"\\\\s*(\\\\[)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"\\\\s*(])","endCaptures":{"1":{"name":"keyword.control.mermaid"}},"patterns":[{"captures":{"1":{"name":"constant.numeric.decimal.mermaid"}},"match":"(?i)\\\\s*([\\\\-+]?\\\\d+\\\\.?\\\\d*)"},{"captures":{"1":{"name":"string"}},"match":"(?i)\\\\s*(\\"[($\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*\\")"},{"captures":{"1":{"name":"string"}},"match":"(?i)\\\\s*([($\\\\&%\\\\^/#.?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]+)"},{"captures":{"1":{"name":"keyword.control.mermaid"}},"match":"(?i)\\\\s*(,)"}]}]},{"begin":"(?i)^\\\\s*(y-axis)","beginCaptures":{"1":{"name":"keyword.control.mermaid"}},"end":"$","patterns":[{"captures":{"1":{"name":"constant.numeric.decimal.mermaid"},"2":{"name":"keyword.control.mermaid"},"3":{"name":"constant.numeric.decimal.mermaid"}},"match":"(?i)\\\\s*([\\\\-+]?\\\\d+\\\\.?\\\\d*)\\\\s*(-->)\\\\s*([\\\\-+]?\\\\d+\\\\.?\\\\d*)"},{"captures":{"1":{"name":"string"}},"match":"(?i)\\\\s+(\\"[($\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w\\\\s]*\\")"},{"captures":{"1":{"name":"string"}},"match":"(?i)\\\\s+([($\\\\&%\\\\^/#.,?!;:*+=<>'\\\\\\\\\\\\-\\\\w]*)"}]},{"begin":"(?i)^\\\\s*(line|bar)\\\\s*(\\\\[)","beginCaptures":{"1":{"name":"keyword.control.mermaid"},"2":{"name":"keyword.control.mermaid"}},"end":"\\\\s*(])","endCaptures":{"1":{"name":"keyword.control.mermaid"}},"patterns":[{"captures":{"1":{"name":"constant.numeric.decimal.mermaid"}},"match":"(?i)\\\\s*([\\\\-+]?\\\\d+\\\\.?\\\\d*)"},{"captures":{"1":{"name":"keyword.control.mermaid"}},"match":"(?i)\\\\s*(,)"}]}]}]},"mermaid-ado-code-block":{"begin":"(?i)\\\\s*:::\\\\s*mermaid\\\\s*$","contentName":"meta.embedded.block.mermaid","end":"\\\\s*:::\\\\s*","patterns":[{"include":"#mermaid"}]},"mermaid-code-block":{"begin":"(?i)(?<=[\`~])mermaid(\\\\s+[^\`~]*)?$","contentName":"meta.embedded.block.mermaid","end":"(^|\\\\G)(?=\\\\s*[\`~]{3,}\\\\s*$)","patterns":[{"include":"#mermaid"}]},"mermaid-code-block-with-attributes":{"begin":"(?i)(?<=[\`~])\\\\{\\\\s*\\\\.?mermaid(\\\\s+[^\`~]*)?$","contentName":"meta.embedded.block.mermaid","end":"(^|\\\\G)(?=\\\\s*[\`~]{3,}\\\\s*$)","patterns":[{"include":"#mermaid"}]}},"scopeName":"markdown.mermaid.codeblock","aliases":["mmd"]}`)),a=[e];export{a as default};
//# sourceMappingURL=mermaid-CXyZL9PL.js.map
