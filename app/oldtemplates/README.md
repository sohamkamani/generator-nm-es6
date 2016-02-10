# <%= info.moduleName %> <% if(info.travis){%>[![Build Status](https://travis-ci.org/<%= info.githubUsername %>/<%= info.moduleName %>.svg?branch=master)](https://travis-ci.org/<%= info.githubUsername %>/<%= info.moduleName %>)<%}%> <% if(info.coveralls){%>[![Coverage Status](https://coveralls.io/repos/<%= info.githubUsername %>/<%= info.moduleName %>/badge.svg?branch=master&service=github)](https://coveralls.io/github/<%= info.githubUsername %>/<%= info.moduleName %>?branch=master)<%}%>

> My node module


## Install

```
$ npm install --save <%= info.moduleName %>
```

## License

MIT © [<%= info.name %>](https://github.com/<%= info.githubUsername %>)
