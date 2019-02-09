# me-api

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> .me API

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm install --save @emrys-golden/me-api
```

## Usage

```
const express = require('express');
const api = require('@emrys-golden/me-api')
const config = require('./config');

const app = express();

app.use('/api/v1', api(config));

app.listen(8080, () => console.log('App listening on port 8080'));
```

## Maintainers

[@emrys-golden](https://github.com/emrys-golden)

## License

MIT © 2019 Jonathan Golden
